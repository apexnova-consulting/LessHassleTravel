export type TravelMode = 'plane' | 'train' | 'car' | 'bus'

export type AccommodationType = 'hotel' | 'airbnb'

export type ActivityPreference = 
  | 'sightseeing'
  | 'adventure'
  | 'relaxation'
  | 'nightlife'
  | 'family'
  | 'culture'
  | 'food'

export interface Destination {
  city: string
  duration: number
  order: number
}

export interface TripPreferences {
  totalBudget: number
  currency?: string
  startDate: Date
  endDate: Date
  travelers: {
    adults: number
    children: number
  }
  destinations: Destination[]
  travelModes: TravelMode[]
  accommodationType: AccommodationType
  activityPreferences: ActivityPreference[]
  mealPlanning: boolean
}

export interface TripPlan {
  id: string
  preferences: TripPreferences
  itinerary: {
    dailyPlans: {
      date: Date
      destination: string
      activities: {
        name: string
        duration: number
        cost: number
      }[]
      meals: {
        type: 'breakfast' | 'lunch' | 'dinner'
        name: string
        cost: number
      }[]
      accommodation: {
        name: string
        type: AccommodationType
        cost: number
      }
      transportation?: {
        mode: TravelMode
        from: string
        to: string
        cost: number
        duration: number
      }
    }[]
    totalCost: number
    budgetBreakdown: {
      accommodation: number
      transportation: number
      activities: number
      meals: number
      other: number
    }
  }
} 