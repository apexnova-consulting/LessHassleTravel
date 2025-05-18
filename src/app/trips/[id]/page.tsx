'use client'

/* eslint-disable react/no-unescaped-entities */
import { notFound } from 'next/navigation'
import type { TripPlan } from '@/types/trip'
import { useState, useEffect } from 'react'

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

  // Fetch trip plan data
  useEffect(() => {
    getTripPlan(params.id)
      .then(setTripPlan)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [params.id])

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