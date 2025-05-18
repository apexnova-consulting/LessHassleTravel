'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'

interface TripSummary {
  id: string
  title: string
  totalBudget: number
  currency: string
  startDate: string
  endDate: string
  destinations: string
  totalCost: number
}

export default function DashboardPage() {
  const [trips, setTrips] = useState<TripSummary[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('/api/trips')
        
        // Convert date strings to Date objects
        const formattedTrips = response.data.map((trip: any) => ({
          ...trip,
          startDate: new Date(trip.startDate).toLocaleDateString(),
          endDate: new Date(trip.endDate).toLocaleDateString()
        }))
        
        setTrips(formattedTrips)
        setError(null)
      } catch (err) {
        console.error('Error fetching trips:', err)
        setError('Failed to load trips. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTrips()
  }, [])

  const handleDeleteTrip = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this trip?')) {
      try {
        await axios.delete(`/api/trips/${id}`)
        
        // Remove the deleted trip from state
        setTrips(trips.filter(trip => trip.id !== id))
      } catch (err) {
        console.error('Error deleting trip:', err)
        alert('Failed to delete trip. Please try again.')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Your Trips
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Manage your travel plans and itineraries
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Link
              href="/plan"
              className="inline-flex items-center rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Create New Trip
            </Link>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700">
            {error}
          </div>
        ) : trips.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No trips yet</h3>
            <p className="text-gray-500 mb-6">
              Start planning your first trip to get personalized itineraries and budget breakdowns.
            </p>
            <Link
              href="/plan"
              className="inline-flex items-center rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Plan Your First Trip
            </Link>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    {trip.title}
                  </h3>
                  <div className="mt-2 text-sm text-gray-500">
                    <p><span className="font-medium">Destinations:</span> {trip.destinations}</p>
                    <p><span className="font-medium">Dates:</span> {trip.startDate} - {trip.endDate}</p>
                    <p>
                      <span className="font-medium">Budget:</span> {trip.currency} {trip.totalBudget.toLocaleString()}
                    </p>
                    <p>
                      <span className="font-medium">Current Cost:</span> {trip.currency} {trip.totalCost.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-between">
                  <Link
                    href={`/trips/${trip.id}`}
                    className="text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleDeleteTrip(trip.id)}
                    className="text-sm font-medium text-red-600 hover:text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 