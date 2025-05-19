import { NextRequest, NextResponse } from 'next/server'
import type { TripPreferences } from '@/types/trip'
import { tripPreferencesSchema } from '@/lib/validators/trip'
import { v4 as uuidv4 } from 'uuid'

// Mock API implementation that doesn't rely on Prisma/database
export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validate the request body
    const validatedData = tripPreferencesSchema.parse(body)
    
    // Generate a unique ID for this trip
    const tripId = uuidv4()
    
    // Calculate trip duration
    const startDate = new Date(validatedData.startDate)
    const endDate = new Date(validatedData.endDate)
    const tripDuration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Use the first destination as the main destination
    const mainDestination = validatedData.destinations[0]?.city || 'Unknown'
    
    // Generate mock daily plans
    const dailyPlans = []
    
    // Determine accommodation cost based on preferences and budget
    const dailyAccommodationCost = 
      validatedData.accommodationType === 'hotel' ? 150 :
      validatedData.accommodationType === 'resort' ? 250 :
      validatedData.accommodationType === 'airbnb' ? 120 :
      validatedData.accommodationType === 'hostel' ? 40 : 80
    
    // Activity costs based on preferences
    const activityCosts: Record<string, number> = {
      'sightseeing': 50,
      'adventure': 80,
      'relaxation': 60,
      'nightlife': 70,
      'family': 45,
      'culture': 40,
      'food': 55,
      'nature': 35
    }
    
    // Calculate daily budget
    const dailyBudget = validatedData.totalBudget / tripDuration
    
    // Create daily plans
    for (let i = 0; i < tripDuration; i++) {
      const currentDate = new Date(startDate)
      currentDate.setDate(startDate.getDate() + i)
      
      // Alternate between destinations if multiple are provided
      const destinationIndex = i % validatedData.destinations.length
      const currentDestination = validatedData.destinations[destinationIndex]?.city || mainDestination
      
      // Select activities based on preferences (2-3 activities per day)
      const dailyActivities = []
      const prefActivities = validatedData.activityPreferences.length > 0 
        ? validatedData.activityPreferences 
        : ['sightseeing', 'culture', 'food']
      
      // Select 2-3 activities based on preferences
      const activityCount = 2 + Math.floor(Math.random() * 2) // 2 or 3 activities
      const shuffledActivities = [...prefActivities].sort(() => Math.random() - 0.5)
      
      for (let j = 0; j < Math.min(activityCount, shuffledActivities.length); j++) {
        const activityType = shuffledActivities[j]
        const cost = activityCosts[activityType] || 50
        
        const activityNames: Record<string, string[]> = {
          'sightseeing': ['City Tour', 'Landmark Visit', 'Guided Walk'],
          'adventure': ['Hiking Trip', 'Water Rafting', 'Zip Lining'],
          'relaxation': ['Spa Day', 'Beach Time', 'Park Visit'],
          'nightlife': ['Evening Show', 'Live Music', 'Local Bar Tour'],
          'family': ['Theme Park', 'Kid-friendly Museum', 'Playground Visit'],
          'culture': ['Museum Visit', 'Art Gallery', 'Historical Site'],
          'food': ['Food Tasting', 'Cooking Class', 'Restaurant Tour'],
          'nature': ['Nature Reserve', 'Botanical Garden', 'Wildlife Watching']
        }
        
        const activityOptions = activityNames[activityType] || ['Local Activity']
        const activityName = activityOptions[Math.floor(Math.random() * activityOptions.length)]
        
        dailyActivities.push({
          name: activityName,
          duration: 2 + Math.floor(Math.random() * 3), // 2-4 hours
          cost
        })
      }
      
      // Create meals
      const meals = [
        {
          type: 'breakfast',
          name: i % 2 === 0 ? 'Hotel Breakfast' : 'Local Café',
          cost: 15
        },
        {
          type: 'lunch',
          name: i % 3 === 0 ? 'Street Food' : i % 3 === 1 ? 'Casual Restaurant' : 'Quick Bite',
          cost: 25
        },
        {
          type: 'dinner',
          name: i % 4 === 0 ? 'Fine Dining' : i % 4 === 1 ? 'Local Specialty Restaurant' : i % 4 === 2 ? 'Seafood Place' : 'International Cuisine',
          cost: 40
        }
      ]
      
      // Add transportation if changing cities
      let transportation = null
      if (i > 0 && destinationIndex !== (i - 1) % validatedData.destinations.length) {
        const prevDestination = validatedData.destinations[(i - 1) % validatedData.destinations.length]?.city || mainDestination
        const mode = validatedData.travelModes.length > 0 
          ? validatedData.travelModes[Math.floor(Math.random() * validatedData.travelModes.length)]
          : 'plane'
        
        transportation = {
          mode,
          from: prevDestination,
          to: currentDestination,
          duration: mode === 'plane' ? 2 : mode === 'train' ? 4 : mode === 'bus' ? 6 : 5,
          cost: mode === 'plane' ? 200 : mode === 'train' ? 100 : mode === 'bus' ? 50 : 80
        }
      }
      
      // Create the daily plan
      dailyPlans.push({
        date: currentDate,
        destination: currentDestination,
        activities: dailyActivities,
        meals,
        accommodation: {
          name: `${currentDestination} ${
            validatedData.accommodationType === 'hotel' ? 'Hotel' : 
            validatedData.accommodationType === 'resort' ? 'Resort' : 
            validatedData.accommodationType === 'airbnb' ? 'Apartment' : 
            validatedData.accommodationType === 'hostel' ? 'Hostel' : 'Lodging'
          }`,
          type: validatedData.accommodationType,
          cost: dailyAccommodationCost
        },
        transportation
      })
    }
    
    // Calculate total costs
    const accommodationCost = dailyPlans.reduce((sum, plan) => sum + plan.accommodation.cost, 0)
    const transportationCost = dailyPlans.reduce((sum, plan) => sum + (plan.transportation?.cost || 0), 0)
    const activitiesCost = dailyPlans.reduce((sum, plan) => 
      sum + plan.activities.reduce((actSum, act) => actSum + act.cost, 0), 0)
    const mealsCost = dailyPlans.reduce((sum, plan) => 
      sum + plan.meals.reduce((mealSum, meal) => mealSum + meal.cost, 0), 0)
    const otherCost = Math.round(validatedData.totalBudget * 0.05) // 5% for miscellaneous expenses
    
    const totalCost = accommodationCost + transportationCost + activitiesCost + mealsCost + otherCost
    
    // Create the response trip plan
    const tripPlan = {
      id: tripId,
      preferences: {
        totalBudget: validatedData.totalBudget,
        currency: validatedData.currency || 'USD',
        startDate: validatedData.startDate,
        endDate: validatedData.endDate,
        travelers: validatedData.travelers,
        destinations: validatedData.destinations.map(dest => ({
          city: dest.city,
          duration: dest.duration,
          order: dest.order
        })),
        travelModes: validatedData.travelModes,
        accommodationType: validatedData.accommodationType,
        activityPreferences: validatedData.activityPreferences,
        mealPlanning: validatedData.mealPlanning
      },
      itinerary: {
        dailyPlans,
        totalCost,
        budgetBreakdown: {
          accommodation: accommodationCost,
          transportation: transportationCost,
          activities: activitiesCost,
          meals: mealsCost,
          other: otherCost
        }
      }
    }
    
    return NextResponse.json(tripPlan, { status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

// Simple mock GET API that returns a list of trips
export async function GET(req: NextRequest) {
  try {
    // Return empty trips array by default for new users
    const mockTrips: any[] = []
    
    return NextResponse.json(mockTrips)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
} 