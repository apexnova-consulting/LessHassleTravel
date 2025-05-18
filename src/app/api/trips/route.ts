import { NextRequest, NextResponse } from 'next/server'
import type { TripPreferences } from '@/types/trip'
import { tripPreferencesSchema } from '@/lib/validators/trip'
import prisma from '@/lib/db/prisma'

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

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validate the request body
    const validatedData = tripPreferencesSchema.parse(body)
    
    // For now, we'll use a mock user ID
    // In a real app, this would come from authentication
    const mockUserId = "user-123456"
    
    // Create a new trip in the database
    const trip = await prisma.trip.create({
      data: {
        userId: mockUserId,
        title: `Trip to ${validatedData.destinations[0]?.city || 'Unknown'}`,
        totalBudget: validatedData.totalBudget,
        currency: validatedData.currency || 'USD',
        startDate: validatedData.startDate,
        endDate: validatedData.endDate,
        
        // Create related destinations
        destinations: {
          create: validatedData.destinations.map(dest => ({
            city: dest.city,
            duration: dest.duration,
            order: dest.order
          }))
        },
        
        // Create related travel modes
        travelModes: {
          create: validatedData.travelModes.map(mode => ({
            mode: mode
          }))
        },
        
        // Create trip preferences
        preferences: {
          create: {
            adults: validatedData.travelers.adults,
            children: validatedData.travelers.children,
            accommodationType: validatedData.accommodationType,
            mealPlanning: validatedData.mealPlanning,
            activityPreferences: JSON.stringify(validatedData.activityPreferences)
          }
        }
      }
    })
    
    // Generate a mock itinerary (in a real app, this would be based on AI or other logic)
    const itinerary = await prisma.itinerary.create({
      data: {
        tripId: trip.id,
        totalCost: validatedData.totalBudget * 0.9, // Mock calculation
        accommodationCost: validatedData.totalBudget * 0.4,
        transportationCost: validatedData.totalBudget * 0.2,
        activitiesCost: validatedData.totalBudget * 0.2,
        mealsCost: validatedData.totalBudget * 0.1,
        otherCost: validatedData.totalBudget * 0.1,
        
        // Create daily plans for each day of the trip
        dailyPlans: {
          create: Array.from({ length: 3 }).map((_, index) => {
            const date = new Date(validatedData.startDate)
            date.setDate(date.getDate() + index)
            
            return {
              date,
              destinationId: '', // This will be updated after creation
              
              // Create activities for the day
              activities: {
                create: [
                  {
                    name: 'Sightseeing Tour',
                    duration: 3,
                    cost: 50
                  },
                  {
                    name: 'Museum Visit',
                    duration: 2,
                    cost: 25
                  }
                ]
              },
              
              // Create meals for the day
              meals: {
                create: [
                  {
                    type: 'breakfast',
                    name: 'Hotel Breakfast',
                    cost: 15
                  },
                  {
                    type: 'lunch',
                    name: 'Local Restaurant',
                    cost: 25
                  },
                  {
                    type: 'dinner',
                    name: 'Fine Dining Experience',
                    cost: 50
                  }
                ]
              },
              
              // Create accommodation for the day
              accommodation: {
                create: {
                  name: 'Central Hotel',
                  type: validatedData.accommodationType,
                  cost: 150
                }
              }
            }
          })
        }
      }
    })
    
    // Get the first destination to assign to daily plans
    const firstDestination = await prisma.destination.findFirst({
      where: { tripId: trip.id }
    })
    
    if (firstDestination) {
      // Update daily plans with the destination ID
      await prisma.dailyPlan.updateMany({
        where: { itineraryId: itinerary.id },
        data: { destinationId: firstDestination.id }
      })
    }
    
    // Fetch the created trip with all its relations
    const fullTrip = await prisma.trip.findUnique({
      where: { id: trip.id },
      include: {
        destinations: true,
        travelModes: true,
        preferences: true,
        itinerary: {
          include: {
            dailyPlans: {
              include: {
                destination: true,
                activities: true,
                meals: true,
                accommodation: true,
                transportation: true
              }
            }
          }
        }
      }
    })
    
    // Transform the database model to match our API response type
    const transformedTrip = {
      id: fullTrip?.id,
      preferences: {
        totalBudget: fullTrip?.totalBudget || 0,
        currency: fullTrip?.currency || 'USD',
        startDate: fullTrip?.startDate || new Date(),
        endDate: fullTrip?.endDate || new Date(),
        travelers: {
          adults: fullTrip?.preferences?.adults || 1,
          children: fullTrip?.preferences?.children || 0
        },
        destinations: fullTrip?.destinations.map(dest => ({
          city: dest.city,
          duration: dest.duration,
          order: dest.order
        })) || [],
        travelModes: fullTrip?.travelModes.map(tm => tm.mode) as any[] || [],
        accommodationType: fullTrip?.preferences?.accommodationType as any || 'hotel',
        activityPreferences: JSON.parse(fullTrip?.preferences?.activityPreferences || '[]'),
        mealPlanning: fullTrip?.preferences?.mealPlanning || false
      },
      itinerary: {
        dailyPlans: fullTrip?.itinerary?.dailyPlans.map(dp => ({
          date: dp.date,
          destination: dp.destination?.city || 'Unknown',
          activities: dp.activities.map(act => ({
            name: act.name,
            duration: act.duration,
            cost: act.cost
          })),
          meals: dp.meals.map(meal => ({
            type: meal.type as any,
            name: meal.name,
            cost: meal.cost
          })),
          accommodation: dp.accommodation ? {
            name: dp.accommodation.name,
            type: dp.accommodation.type as any,
            cost: dp.accommodation.cost
          } : undefined,
          transportation: dp.transportation ? {
            mode: dp.transportation.mode as any,
            from: dp.transportation.from,
            to: dp.transportation.to,
            cost: dp.transportation.cost,
            duration: dp.transportation.duration
          } : undefined
        })) || [],
        totalCost: fullTrip?.itinerary?.totalCost || 0,
        budgetBreakdown: {
          accommodation: fullTrip?.itinerary?.accommodationCost || 0,
          transportation: fullTrip?.itinerary?.transportationCost || 0,
          activities: fullTrip?.itinerary?.activitiesCost || 0,
          meals: fullTrip?.itinerary?.mealsCost || 0,
          other: fullTrip?.itinerary?.otherCost || 0
        }
      }
    }
    
    return NextResponse.json(transformedTrip, { status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    // For now, we'll use a mock user ID
    // In a real app, this would come from authentication
    const mockUserId = "user-123456"
    
    // Get all trips for the user
    const trips = await prisma.trip.findMany({
      where: { userId: mockUserId },
      include: {
        destinations: true,
        travelModes: true,
        preferences: true,
        itinerary: {
          include: {
            dailyPlans: {
              include: {
                destination: true,
                activities: true,
                meals: true,
                accommodation: true,
                transportation: true
              }
            }
          }
        }
      }
    })
    
    // Transform the trips to match our API response type
    const transformedTrips = trips.map(trip => ({
      id: trip.id,
      title: trip.title,
      totalBudget: trip.totalBudget,
      currency: trip.currency,
      startDate: trip.startDate,
      endDate: trip.endDate,
      destinations: trip.destinations.map(dest => dest.city).join(', '),
      totalCost: trip.itinerary?.totalCost || 0
    }))
    
    return NextResponse.json(transformedTrips)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
} 