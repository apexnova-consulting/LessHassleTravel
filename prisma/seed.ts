import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

// Define types for our entities
interface Destination {
  id: string
  tripId: string
  city: string
  duration: number
  order: number
}

async function seed() {
  try {
    console.log('Seeding database...')
    
    // Create a default user
    const user = await prisma.user.upsert({
      where: { email: 'demo@lesshassletravel.com' },
      update: {},
      create: {
        email: 'demo@lesshassletravel.com',
        name: 'Demo User',
        password: 'password123' // In production, this would be hashed
      }
    })
    
    console.log(`Created user: ${user.name} (${user.email})`)
    
    // Create a sample trip
    const trip = await prisma.trip.create({
      data: {
        userId: user.id,
        title: 'European Adventure',
        totalBudget: 5000,
        currency: 'USD',
        startDate: new Date(2024, 5, 15), // June 15, 2024
        endDate: new Date(2024, 5, 25),   // June 25, 2024
        
        // Create destinations
        destinations: {
          create: [
            {
              city: 'Paris',
              duration: 3,
              order: 0
            },
            {
              city: 'Rome',
              duration: 4,
              order: 1
            },
            {
              city: 'Barcelona',
              duration: 3,
              order: 2
            }
          ]
        },
        
        // Create travel modes
        travelModes: {
          create: [
            { mode: 'plane' },
            { mode: 'train' }
          ]
        },
        
        // Create preferences
        preferences: {
          create: {
            adults: 2,
            children: 0,
            accommodationType: 'hotel',
            mealPlanning: true,
            activityPreferences: JSON.stringify(['culture', 'food', 'sightseeing'])
          }
        }
      }
    })
    
    console.log(`Created trip: ${trip.title}`)
    
    // Get destinations to reference in itinerary
    const destinations = await prisma.destination.findMany({
      where: { tripId: trip.id }
    })
    
    // Create itinerary
    const itinerary = await prisma.itinerary.create({
      data: {
        tripId: trip.id,
        totalCost: 4500,
        accommodationCost: 2000,
        transportationCost: 1000,
        activitiesCost: 800,
        mealsCost: 600,
        otherCost: 100,
        
        // Create daily plans for each destination
        dailyPlans: {
          create: destinations.flatMap((destination: Destination, destIndex: number) => {
            return Array.from({ length: destination.duration }).map((_, dayIndex: number) => {
              const date = new Date(trip.startDate)
              const totalPreviousDays = destinations
                .slice(0, destIndex)
                .reduce((sum: number, d: Destination) => sum + d.duration, 0)
              
              date.setDate(date.getDate() + totalPreviousDays + dayIndex)
              
              return {
                date,
                destinationId: destination.id,
                
                // Create activities
                activities: {
                  create: [
                    {
                      name: `${destination.city} Tour Day ${dayIndex + 1}`,
                      duration: 3,
                      cost: 50
                    },
                    {
                      name: `${destination.city} Museum Visit`,
                      duration: 2,
                      cost: 25
                    }
                  ]
                },
                
                // Create meals
                meals: {
                  create: [
                    {
                      type: 'breakfast',
                      name: 'Hotel Breakfast',
                      cost: 15
                    },
                    {
                      type: 'lunch',
                      name: `Local ${destination.city} Restaurant`,
                      cost: 25
                    },
                    {
                      type: 'dinner',
                      name: `${destination.city} Fine Dining`,
                      cost: 50
                    }
                  ]
                },
                
                // Create accommodation
                accommodation: {
                  create: {
                    name: `${destination.city} Central Hotel`,
                    type: 'hotel',
                    cost: 150
                  }
                },
                
                // Add transportation for the first day of each destination (except the first one)
                ...(dayIndex === 0 && destIndex > 0
                  ? {
                      transportation: {
                        create: {
                          mode: destIndex === 1 ? 'plane' : 'train',
                          from: destinations[destIndex - 1].city,
                          to: destination.city,
                          cost: destIndex === 1 ? 300 : 100,
                          duration: destIndex === 1 ? 3 : 2
                        }
                      }
                    }
                  : {})
              }
            })
          })
        }
      }
    })
    
    // Get the daily plans count for logging
    const dailyPlansCount = await prisma.dailyPlan.count({
      where: { itineraryId: itinerary.id }
    })
    
    console.log(`Created itinerary with ${dailyPlansCount} daily plans`)
    
    console.log('Seeding completed!')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seed() 