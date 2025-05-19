import { z } from 'zod'

export const travelModeSchema = z.enum(['plane', 'train', 'car', 'bus'])
export const accommodationTypeSchema = z.enum(['hotel', 'airbnb', 'resort', 'hostel'])
export const activityPreferenceSchema = z.enum([
  'sightseeing',
  'adventure',
  'relaxation',
  'nightlife',
  'family',
  'culture',
  'food'
])

export const destinationSchema = z.object({
  city: z.string().min(1, 'City is required'),
  duration: z.number().min(1, 'Duration must be at least 1 day'),
  order: z.number().min(0)
})

export const tripPreferencesSchema = z.object({
  totalBudget: z.number().min(1, 'Budget must be greater than 0'),
  currency: z.string().default('USD').optional(),
  startDate: z.date(),
  endDate: z.date(),
  travelers: z.object({
    adults: z.number().min(1, 'At least one adult traveler is required'),
    children: z.number().min(0)
  }),
  destinations: z.array(destinationSchema).min(1, 'At least one destination is required'),
  travelModes: z.array(travelModeSchema).min(1, 'At least one travel mode is required'),
  accommodationType: accommodationTypeSchema,
  activityPreferences: z.array(activityPreferenceSchema).min(1, 'At least one activity preference is required'),
  mealPlanning: z.boolean()
}).refine((data) => {
  return data.endDate > data.startDate
}, {
  message: 'End date must be after start date',
  path: ['endDate']
}).refine((data) => {
  const totalDuration = data.destinations.reduce((sum, dest) => sum + dest.duration, 0)
  const tripDuration = Math.ceil((data.endDate.getTime() - data.startDate.getTime()) / (1000 * 60 * 60 * 24))
  return totalDuration <= tripDuration
}, {
  message: 'Total duration of destinations cannot exceed trip duration',
  path: ['destinations']
}) 