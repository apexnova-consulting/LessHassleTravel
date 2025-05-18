import { NextResponse } from 'next/server'
import type { TripPreferences, TripPlan } from '@/types/trip'

// TODO: Replace with actual database integration
const mockTripPlans = new Map<string, TripPlan>()

function calculateTotalCost(itinerary: TripPlan['itinerary']): number {
  return itinerary.dailyPlans.reduce((total, day) => {
    const dayCost = 
      day.activities.reduce((sum, activity) => sum + activity.cost, 0) +
      day.meals.reduce((sum, meal) => sum + meal.cost, 0) +
      day.accommodation.cost +
      (day.transportation?.cost || 0)
    return total + dayCost
  }, 0)
}

function calculateBudgetBreakdown(itinerary: TripPlan['itinerary']) {
  const breakdown = {
    accommodation: 0,
    transportation: 0,
    activities: 0,
    meals: 0,
    other: 0,
  }

  itinerary.dailyPlans.forEach(day => {
    breakdown.accommodation += day.accommodation.cost
    breakdown.transportation += day.transportation?.cost || 0
    breakdown.activities += day.activities.reduce((sum, activity) => sum + activity.cost, 0)
    breakdown.meals += day.meals.reduce((sum, meal) => sum + meal.cost, 0)
  })

  return breakdown
}

export async function POST(request: Request) {
  try {
    const data: TripPreferences = await request.json()

    // Generate a unique ID for the trip plan
    const id = Math.random().toString(36).substring(7)

    // Create the trip plan
    const tripPlan: TripPlan = {
      id,
      preferences: data,
      itinerary: {
        dailyPlans: data.destinations.map((destination, index) => {
          // Calculate the date for this destination
          const date = new Date(data.startDate)
          date.setDate(date.getDate() + index)

          // Generate activities based on preferences
          const activities = [
            {
              name: `${destination.city} City Tour`,
              duration: 3,
              cost: 50,
            },
            {
              name: `${destination.city} Museum Visit`,
              duration: 2,
              cost: 20,
            },
          ]

          // Generate meals
          const meals = [
            {
              type: 'breakfast' as const,
              name: 'Hotel Breakfast',
              cost: 15,
            },
            {
              type: 'lunch' as const,
              name: 'Local Restaurant',
              cost: 25,
            },
            {
              type: 'dinner' as const,
              name: 'Fine Dining',
              cost: 40,
            },
          ]

          // Generate accommodation
          const accommodation = {
            name: `${destination.city} Hotel`,
            type: data.accommodationType,
            cost: 150,
          }

          // Add transportation if not the first destination
          const transportation = index > 0 ? {
            mode: data.travelModes[0],
            from: data.destinations[index - 1].city,
            to: destination.city,
            cost: 100,
            duration: 2,
          } : undefined

          return {
            date,
            destination: destination.city,
            activities,
            meals,
            accommodation,
            ...(transportation && { transportation }),
          }
        }),
        totalCost: 0, // Will be calculated below
        budgetBreakdown: {
          accommodation: 0,
          transportation: 0,
          activities: 0,
          meals: 0,
          other: 0,
        },
      },
    }

    // Calculate total cost and budget breakdown
    tripPlan.itinerary.totalCost = calculateTotalCost(tripPlan.itinerary)
    tripPlan.itinerary.budgetBreakdown = calculateBudgetBreakdown(tripPlan.itinerary)

    // Store the trip plan
    mockTripPlans.set(id, tripPlan)

    return NextResponse.json(tripPlan)
  } catch (error) {
    console.error('Error processing trip plan:', error)
    return NextResponse.json(
      { error: 'Failed to process trip plan' },
      { status: 500 }
    )
  }
} 