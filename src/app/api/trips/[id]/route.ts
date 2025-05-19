import { NextRequest, NextResponse } from 'next/server'
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
    
    // Mock implementation that doesn't rely on database
    // This creates a realistic trip plan based on the ID
    
    // Generate mock data based on the trip ID
    const mockStartDate = new Date()
    const mockEndDate = new Date(mockStartDate)
    mockEndDate.setDate(mockStartDate.getDate() + 7) // One week trip
    
    // Use trip ID to create consistent but varied trip details
    const firstChar = tripId.charAt(0).toLowerCase()
    const isPremium = firstChar.charCodeAt(0) % 2 === 0
    const isFamilyTrip = firstChar.charCodeAt(0) % 3 === 0
    
    const mainDestination = firstChar.charCodeAt(0) % 5 === 0 ? 'Paris, France' : 
      firstChar.charCodeAt(0) % 4 === 0 ? 'Tokyo, Japan' : 
      firstChar.charCodeAt(0) % 3 === 0 ? 'New York, USA' : 
      firstChar.charCodeAt(0) % 2 === 0 ? 'London, UK' : 'Barcelona, Spain'
    
    const secondDestination = firstChar.charCodeAt(0) % 4 === 0 ? 'Amsterdam, Netherlands' :
      firstChar.charCodeAt(0) % 3 === 0 ? 'Rome, Italy' :
      firstChar.charCodeAt(0) % 2 === 0 ? 'Berlin, Germany' : 'Prague, Czech Republic'
    
    const accommodationType: AccommodationType = isPremium ? 'resort' : 
      isFamilyTrip ? 'airbnb' : 'hotel'
    
    const activityPreferences: ActivityPreference[] = isFamilyTrip 
      ? ['family', 'culture', 'food']
      : isPremium 
        ? ['relaxation', 'nightlife', 'adventure']
        : ['sightseeing', 'culture', 'food']
    
    // Create daily plans
    const dailyPlans = []
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(mockStartDate)
      currentDate.setDate(currentDate.getDate() + i)
      
      // Determine destination based on day
      const destination = i < 4 ? mainDestination : secondDestination
      
      // Mock activities
      const activities = activityPreferences.map(pref => {
        const activityNames: Record<ActivityPreference, string[]> = {
          'sightseeing': ['City Tour', 'Landmark Visit', 'Guided Walk'],
          'adventure': ['Hiking Trip', 'Water Rafting', 'Zip Lining'],
          'relaxation': ['Spa Day', 'Beach Time', 'Yoga Session'],
          'nightlife': ['Evening Show', 'Live Music', 'Local Bar Tour'],
          'family': ['Theme Park', 'Kid-friendly Museum', 'Playground Visit'],
          'culture': ['Museum Visit', 'Art Gallery', 'Historical Site'],
          'food': ['Food Tasting', 'Cooking Class', 'Restaurant Tour'],
          'nature': ['Nature Reserve', 'Botanical Garden', 'Wildlife Watching']
        }
        
        const options = activityNames[pref] || ['Local Activity']
        const name = options[Math.floor(Math.random() * options.length)]
        
        return {
          name,
          duration: 2 + Math.floor(Math.random() * 3), // 2-4 hours
          cost: pref === 'adventure' ? 80 : pref === 'nightlife' ? 70 : 50
        }
      })
      
      // Mock meals
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
          name: i % 4 === 0 ? 'Fine Dining' : i % 4 === 1 ? 'Local Specialty Restaurant' : 'Traditional Cuisine',
          cost: 40
        }
      ]
      
      // Mock accommodation
      const accommodation = {
        name: `${destination.split(',')[0]} ${
          accommodationType === 'hotel' ? 'Hotel' : 
          accommodationType === 'resort' ? 'Resort' : 
          accommodationType === 'airbnb' ? 'Apartment' : 
          'Lodging'
        }`,
        type: accommodationType,
        cost: accommodationType === 'resort' ? 250 : 
              accommodationType === 'hotel' ? 150 : 
              accommodationType === 'airbnb' ? 120 : 70
      }
      
      // Add transportation if changing cities
      let transportation = null
      if (i === 4) {
        transportation = {
          mode: 'train',
          from: mainDestination,
          to: secondDestination,
          cost: 120,
          duration: 3
        }
      }
      
      dailyPlans.push({
        date: currentDate,
        destination,
        activities,
        meals,
        accommodation,
        transportation
      })
    }
    
    // Calculate budget breakdown
    const accommodationCost = dailyPlans.reduce((sum, plan) => sum + plan.accommodation.cost, 0)
    const transportationCost = dailyPlans.reduce((sum, plan) => sum + (plan.transportation?.cost || 0), 0)
    const activitiesCost = dailyPlans.reduce((sum, plan) => 
      sum + plan.activities.reduce((actSum, act) => actSum + act.cost, 0), 0)
    const mealsCost = dailyPlans.reduce((sum, plan) => 
      sum + plan.meals.reduce((mealSum, meal) => mealSum + meal.cost, 0), 0)
    const otherCost = 150 // Miscellaneous expenses
    
    const totalCost = accommodationCost + transportationCost + activitiesCost + mealsCost + otherCost
    
    // Create the mock trip
    const mockTrip = {
      id: tripId,
      preferences: {
        totalBudget: totalCost + 500, // Buffer in the budget
        currency: 'USD',
        startDate: mockStartDate,
        endDate: mockEndDate,
        travelers: {
          adults: isFamilyTrip ? 2 : isPremium ? 2 : 1,
          children: isFamilyTrip ? 2 : 0
        },
        destinations: [
          {
            city: mainDestination,
            duration: 4,
            order: 0
          },
          {
            city: secondDestination,
            duration: 3,
            order: 1
          }
        ],
        travelModes: ['plane', 'train'],
        accommodationType,
        activityPreferences,
        mealPlanning: true
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
    
    return NextResponse.json(mockTrip)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    
    // In a real app, this would delete from database
    // For now we'll just return success
    
    return NextResponse.json({ success: true, message: 'Trip deleted successfully' })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
} 