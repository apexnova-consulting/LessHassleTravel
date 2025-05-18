import { NextRequest, NextResponse } from 'next/server'
import type { TripPlan } from '@/types/trip'

// TODO: Replace with actual database integration
const mockTripPlans = new Map<string, TripPlan>()

type RouteContext = {
  params: {
    id: string
  }
}

export async function GET(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const tripPlan = mockTripPlans.get(params.id)
    
    if (!tripPlan) {
      return NextResponse.json(
        { error: 'Trip plan not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(tripPlan)
  } catch (error) {
    console.error('Error fetching trip plan:', error)
    return NextResponse.json(
      { error: 'Failed to fetch trip plan' },
      { status: 500 }
    )
  }
} 