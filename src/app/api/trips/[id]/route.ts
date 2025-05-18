import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import { 
  TravelMode, 
  AccommodationType, 
  ActivityPreference 
} from '@/types/trip'

interface DestinationType {
  id: string
  city: string
  duration: number
  order: number
}

interface TravelModeType {
  id: string
  mode: string
}

interface PreferencesType {
  id: string
  adults: number
  children: number
  accommodationType: string
  activityPreferences: string
  mealPlanning: boolean
}

interface ActivityType {
  id: string
  name: string
  duration: number
  cost: number
}

interface MealType {
  id: string
  type: string
  name: string
  cost: number
}

interface AccommodationDbType {
  id: string
  name: string
  type: string
  cost: number
}

interface TransportationType {
  id: string
  mode: string
  from: string
  to: string
  cost: number
  duration: number
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const tripId = params.id
    
    if (!tripId) {
      return NextResponse.json({ error: 'Trip ID is required' }, { status: 400 })
    }
    
    // For now, we'll use a mock user ID
    // In a real app, this would come from authentication
    const mockUserId = "user-123456"
    
    // Get the trip by ID
    const trip = await prisma.trip.findUnique({
      where: { 
        id: tripId,
        // In a real app, we would check user ownership
        // userId: mockUserId
      },
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
              },
              orderBy: {
                date: 'asc'
              }
            }
          }
        }
      }
    })
    
    if (!trip) {
      return NextResponse.json({ error: 'Trip not found' }, { status: 404 })
    }
    
    // Transform the database model to match our API response type
    const transformedTrip = {
      id: trip.id,
      preferences: {
        totalBudget: trip.totalBudget,
        currency: trip.currency,
        startDate: trip.startDate,
        endDate: trip.endDate,
        travelers: {
          adults: trip.preferences?.adults || 1,
          children: trip.preferences?.children || 0
        },
        destinations: trip.destinations.map((dest: DestinationType) => ({
          city: dest.city,
          duration: dest.duration,
          order: dest.order
        })),
        travelModes: trip.travelModes.map((tm: TravelModeType) => tm.mode as TravelMode),
        accommodationType: trip.preferences?.accommodationType as AccommodationType,
        activityPreferences: trip.preferences ? 
          JSON.parse(trip.preferences.activityPreferences) as ActivityPreference[] : [],
        mealPlanning: trip.preferences?.mealPlanning || false
      },
      itinerary: trip.itinerary ? {
        dailyPlans: trip.itinerary.dailyPlans.map((dp: any) => ({
          date: dp.date,
          destination: dp.destination.city,
          activities: dp.activities.map((act: ActivityType) => ({
            name: act.name,
            duration: act.duration,
            cost: act.cost
          })),
          meals: dp.meals.map((meal: MealType) => ({
            type: meal.type,
            name: meal.name,
            cost: meal.cost
          })),
          accommodation: dp.accommodation ? {
            name: dp.accommodation.name,
            type: dp.accommodation.type,
            cost: dp.accommodation.cost
          } : undefined,
          transportation: dp.transportation ? {
            mode: dp.transportation.mode,
            from: dp.transportation.from,
            to: dp.transportation.to,
            cost: dp.transportation.cost,
            duration: dp.transportation.duration
          } : undefined
        })),
        totalCost: trip.itinerary.totalCost,
        budgetBreakdown: {
          accommodation: trip.itinerary.accommodationCost,
          transportation: trip.itinerary.transportationCost,
          activities: trip.itinerary.activitiesCost,
          meals: trip.itinerary.mealsCost,
          other: trip.itinerary.otherCost
        }
      } : undefined
    }
    
    return NextResponse.json(transformedTrip)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const tripId = params.id
    
    if (!tripId) {
      return NextResponse.json({ error: 'Trip ID is required' }, { status: 400 })
    }
    
    // For now, we'll use a mock user ID
    // In a real app, this would come from authentication
    const mockUserId = "user-123456"
    
    // First, check if the trip exists and belongs to the user
    const trip = await prisma.trip.findUnique({
      where: { 
        id: tripId,
        // In a real app, we would check user ownership
        // userId: mockUserId 
      }
    })
    
    if (!trip) {
      return NextResponse.json({ error: 'Trip not found' }, { status: 404 })
    }
    
    // Delete the trip (Prisma will cascade delete all related records)
    await prisma.trip.delete({
      where: { id: tripId }
    })
    
    return NextResponse.json({ message: 'Trip deleted successfully' })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
} 