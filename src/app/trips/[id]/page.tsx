'use client'

/* eslint-disable react/no-unescaped-entities */
import { notFound } from 'next/navigation'
import type { TripPlan } from '@/types/trip'
import { useState, useEffect } from 'react'
import Link from 'next/link'

async function getTripPlan(id: string): Promise<TripPlan> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trips/${id}`, {
    cache: 'no-store',
  })

  if (!response.ok) {
    if (response.status === 404) {
      notFound()
    }
    throw new Error('Failed to fetch trip plan')
  }

  return response.json()
}

function generateItineraryPDF(tripPlan: TripPlan) {
  // Create a new window for printing
  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  // Generate the HTML content
  const content = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Trip Itinerary - ${tripPlan.id}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 2rem;
          }
          h1, h2, h3 {
            color: #1a1a1a;
          }
          .budget-summary {
            margin: 2rem 0;
            padding: 1rem;
            background: #f9fafb;
            border-radius: 0.5rem;
          }
          .day-plan {
            margin: 2rem 0;
            padding: 1rem;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
          }
          .section {
            margin: 1rem 0;
          }
          .cost {
            color: #059669;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1>Trip Itinerary</h1>
        
        <div class="budget-summary">
          <h2>Budget Summary</h2>
          <p>Total Budget: $${tripPlan.preferences.totalBudget}</p>
          <p>Estimated Cost: $${tripPlan.itinerary.totalCost}</p>
        </div>

        ${tripPlan.itinerary.dailyPlans.map((day, index) => `
          <div class="day-plan">
            <h2>Day ${index + 1} - ${day.destination}</h2>
            <p>Date: ${day.date.toLocaleDateString()}</p>

            <div class="section">
              <h3>Activities</h3>
              ${day.activities.map(activity => `
                <p>${activity.name} (${activity.duration} hours) - <span class="cost">$${activity.cost}</span></p>
              `).join('')}
            </div>

            <div class="section">
              <h3>Meals</h3>
              ${day.meals.map(meal => `
                <p>${meal.name} (${meal.type}) - <span class="cost">$${meal.cost}</span></p>
              `).join('')}
            </div>

            <div class="section">
              <h3>Accommodation</h3>
              <p>${day.accommodation.name} (${day.accommodation.type}) - <span class="cost">$${day.accommodation.cost}</span></p>
            </div>

            ${day.transportation ? `
              <div class="section">
                <h3>Transportation</h3>
                <p>${day.transportation.mode} from ${day.transportation.from} to ${day.transportation.to} (${day.transportation.duration} hours) - <span class="cost">$${day.transportation.cost}</span></p>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </body>
    </html>
  `

  // Write the content to the new window
  printWindow.document.write(content)
  printWindow.document.close()

  // Wait for the content to load
  printWindow.onload = function() {
    // Print the window
    printWindow.print()
    // Close the window after printing
    printWindow.close()
  }
}

export default function TripDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const [tripPlan, setTripPlan] = useState<TripPlan | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [aiRecommendations, setAiRecommendations] = useState<{
    hotels: Array<{ name: string, url: string, price: number, rating: number }>,
    flights: Array<{ airline: string, url: string, price: number, departureTime: string, arrivalTime: string }>,
    activities: Array<{ name: string, url: string, price: number, description: string }>
  } | null>(null)
  const [loadingRecommendations, setLoadingRecommendations] = useState(false)

  // Fetch trip plan data
  useEffect(() => {
    getTripPlan(params.id)
      .then(setTripPlan)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [params.id])

  // Get AI recommendations when trip plan is loaded
  useEffect(() => {
    if (tripPlan) {
      setLoadingRecommendations(true)
      // Simulate API call for AI recommendations
      setTimeout(() => {
        // Mock AI recommendations data
        setAiRecommendations({
          hotels: [
            { name: "Grand Hotel", url: "https://example.com/hotel1", price: 150, rating: 4.5 },
            { name: "Luxury Resort", url: "https://example.com/hotel2", price: 220, rating: 4.8 },
            { name: "Cozy Inn", url: "https://example.com/hotel3", price: 95, rating: 4.2 }
          ],
          flights: [
            { airline: "JetAir", url: "https://example.com/flight1", price: 350, departureTime: "09:00 AM", arrivalTime: "11:30 AM" },
            { airline: "SkyWings", url: "https://example.com/flight2", price: 420, departureTime: "01:15 PM", arrivalTime: "03:45 PM" },
            { airline: "Global Airways", url: "https://example.com/flight3", price: 310, departureTime: "07:30 PM", arrivalTime: "10:00 PM" }
          ],
          activities: [
            { name: "City Tour", url: "https://example.com/activity1", price: 45, description: "Explore the city's landmarks with a local guide" },
            { name: "Food Tasting", url: "https://example.com/activity2", price: 65, description: "Taste local delicacies at the best spots" },
            { name: "Museum Pass", url: "https://example.com/activity3", price: 25, description: "Access to the city's top museums" }
          ]
        })
        setLoadingRecommendations(false)
      }, 1500)
    }
  }, [tripPlan])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!tripPlan) {
    return <div>Trip plan not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Trip Plan
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Here's your personalized travel itinerary
          </p>

          {/* Budget Summary */}
          <div className="mt-8 rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Budget Summary
              </h3>
              <div className="mt-5">
                <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                    <dt className="truncate text-sm font-medium text-gray-500">
                      Total Budget
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                      ${tripPlan.preferences.totalBudget}
                    </dd>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                    <dt className="truncate text-sm font-medium text-gray-500">
                      Estimated Cost
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                      ${tripPlan.itinerary.totalCost}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Daily Itinerary */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Daily Itinerary</h2>
            <div className="mt-4 space-y-8">
              {tripPlan.itinerary.dailyPlans.map((day, index) => (
                <div key={index} className="rounded-lg bg-white shadow">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">
                        Day {index + 1} - {day.destination}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
                        {day.date.toLocaleDateString()}
                      </span>
                    </div>

                    {/* Activities */}
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">Activities</h4>
                      <ul className="mt-2 divide-y divide-gray-200">
                        {day.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="py-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {activity.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {activity.duration} hours
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                ${activity.cost}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Meals */}
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">Meals</h4>
                      <ul className="mt-2 divide-y divide-gray-200">
                        {day.meals.map((meal, mealIndex) => (
                          <li key={mealIndex} className="py-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {meal.name}
                                </p>
                                <p className="text-sm text-gray-500 capitalize">
                                  {meal.type}
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                ${meal.cost}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Accommodation */}
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">Accommodation</h4>
                      <div className="mt-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {day.accommodation.name}
                            </p>
                            <p className="text-sm text-gray-500 capitalize">
                              {day.accommodation.type}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            ${day.accommodation.cost}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Transportation */}
                    {day.transportation && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-500">Transportation</h4>
                        <div className="mt-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {day.transportation.mode} from {day.transportation.from} to{' '}
                                {day.transportation.to} ({day.transportation.duration} hours) - <span className="cost">${day.transportation.cost}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendations Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">AI-Powered Booking Recommendations</h2>
            
            {loadingRecommendations ? (
              <div className="my-8 flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              </div>
            ) : aiRecommendations ? (
              <div className="mt-6 space-y-6">
                {/* Hotel Recommendations */}
                <div className="rounded-lg bg-white shadow overflow-hidden">
                  <div className="px-4 py-5 sm:px-6 bg-gray-50">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Hotel Options</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Based on your preferences and budget</p>
                  </div>
                  <div className="border-t border-gray-200">
                    <ul role="list" className="divide-y divide-gray-200">
                      {aiRecommendations.hotels.map((hotel, index) => (
                        <li key={index} className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900 truncate">{hotel.name}</p>
                              <p className="text-sm text-gray-500">Rating: {hotel.rating}/5</p>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 mr-4">${hotel.price}/night</span>
                              <a
                                href={hotel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                              >
                                Book Now
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Flight Recommendations */}
                <div className="rounded-lg bg-white shadow overflow-hidden">
                  <div className="px-4 py-5 sm:px-6 bg-gray-50">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Flight Options</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Recommended flights to your destinations</p>
                  </div>
                  <div className="border-t border-gray-200">
                    <ul role="list" className="divide-y divide-gray-200">
                      {aiRecommendations.flights.map((flight, index) => (
                        <li key={index} className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900 truncate">{flight.airline}</p>
                              <p className="text-sm text-gray-500">Departure: {flight.departureTime} • Arrival: {flight.arrivalTime}</p>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 mr-4">${flight.price}</span>
                              <a
                                href={flight.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                              >
                                Book Now
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Activity Recommendations */}
                <div className="rounded-lg bg-white shadow overflow-hidden">
                  <div className="px-4 py-5 sm:px-6 bg-gray-50">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Activity Options</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Recommended activities for your trip</p>
                  </div>
                  <div className="border-t border-gray-200">
                    <ul role="list" className="divide-y divide-gray-200">
                      {aiRecommendations.activities.map((activity, index) => (
                        <li key={index} className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900 truncate">{activity.name}</p>
                              <p className="text-sm text-gray-500">{activity.description}</p>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 mr-4">${activity.price}</span>
                              <a
                                href={activity.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                              >
                                Book Now
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="my-8 text-center text-gray-500">
                <p>Unable to load recommendations. Please try again later.</p>
              </div>
            )}
          </div>

          {/* Download Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => generateItineraryPDF(tripPlan)}
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Download Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 