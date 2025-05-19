'use client'

import { useState } from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { tripPreferencesSchema } from '@/lib/validators/trip'
import type { TripPreferences, TripPlan } from '@/types/trip'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from 'next/navigation'
import CitySearch from '@/components/ui/CitySearch'

const steps = [
  { id: 'budget', name: 'Budget & Dates' },
  { id: 'travelers', name: 'Travelers' },
  { id: 'destinations', name: 'Destinations' },
  { id: 'preferences', name: 'Preferences' },
]

export default function TripPlanningForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<TripPreferences>({
    resolver: zodResolver(tripPreferencesSchema),
    defaultValues: {
      travelers: { adults: 1, children: 0 },
      destinations: [],
      travelModes: [],
      activityPreferences: [],
      mealPlanning: false,
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'destinations',
  })

  const onSubmit = async (data: TripPreferences) => {
    try {
      setIsSubmitting(true)
      setError(null)

      const response = await fetch('/api/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to generate trip plan')
      }

      const tripPlan: TripPlan = await response.json()
      
      // TODO: Store trip plan in state management or database
      // For now, we'll just redirect to a success page
      router.push(`/trips/${tripPlan.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md">
      {/* Progress bar */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Plan Your Trip</h2>
        <p className="text-sm text-gray-500 mb-6">Complete the following information to generate your personalized travel plan.</p>
        <nav aria-label="Progress">
          <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
            {steps.map((step, index) => (
              <li key={step.id} className="md:flex-1">
                <div
                  className={`group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 ${
                    index < currentStep
                      ? 'border-primary-600 md:border-primary-600'
                      : index === currentStep
                      ? 'border-primary-500 md:border-primary-500'
                      : 'border-gray-200 md:border-gray-200'
                  }`}
                >
                  <span className={`text-sm font-medium ${
                    index <= currentStep
                      ? 'text-primary-600'
                      : 'text-gray-500'
                  }`}>
                    Step {index + 1}
                  </span>
                  <span className={`text-sm font-medium ${
                    index <= currentStep
                      ? 'text-gray-900'
                      : 'text-gray-500'
                  }`}>{step.name}</span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {error && (
        <div className="mb-6 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {currentStep === 0 && (
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Trip Budget and Dates</h3>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Total Budget
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  {...register('totalBudget', { valueAsNumber: true })}
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">USD</span>
                </div>
              </div>
              {errors.totalBudget && (
                <p className="mt-2 text-sm text-red-600">{errors.totalBudget.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="originCity" className="block text-sm font-medium text-gray-700">
                Origin City (Where your trip starts from)
              </label>
              <div className="mt-1">
                <Controller
                  control={control}
                  name="originCity"
                  render={({ field }) => (
                    <CitySearch
                      value={field.value || ''}
                      onChange={field.onChange}
                      placeholder="Where are you traveling from?"
                      error={errors.originCity?.message}
                    />
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <Controller
                  control={control}
                  name="startDate"
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Select start date"
                      minDate={new Date()}
                    />
                  )}
                />
                {errors.startDate && (
                  <p className="mt-2 text-sm text-red-600">{errors.startDate.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <Controller
                  control={control}
                  name="endDate"
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Select end date"
                      minDate={watch('startDate') || new Date()}
                    />
                  )}
                />
                {errors.endDate && (
                  <p className="mt-2 text-sm text-red-600">{errors.endDate.message}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Traveler Information</h3>
            <div>
              <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                Number of Adults
              </label>
              <input
                type="number"
                {...register('travelers.adults', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                min="1"
              />
              {errors.travelers?.adults && (
                <p className="mt-2 text-sm text-red-600">{errors.travelers.adults.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="children" className="block text-sm font-medium text-gray-700">
                Number of Children
              </label>
              <input
                type="number"
                {...register('travelers.children', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                min="0"
              />
              {errors.travelers?.children && (
                <p className="mt-2 text-sm text-red-600">{errors.travelers.children.message}</p>
              )}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Destinations</h3>
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-end space-x-4 p-4 bg-white rounded-md shadow-sm">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Destination {index + 1}
                    </label>
                    <Controller
                      control={control}
                      name={`destinations.${index}.city`}
                      render={({ field }) => (
                        <CitySearch
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Search for a city"
                          error={errors?.destinations?.[index]?.city?.message}
                        />
                      )}
                    />
                  </div>
                  <div className="w-32">
                    <label className="block text-sm font-medium text-gray-700">
                      Days
                    </label>
                    <input
                      type="number"
                      {...register(`destinations.${index}.duration`, { valueAsNumber: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      min="1"
                    />
                    {errors?.destinations?.[index]?.duration && (
                      <p className="mt-2 text-sm text-red-600">{errors.destinations[index].duration.message}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            {fields.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                <p>No destinations added yet. Click below to add your first destination.</p>
              </div>
            )}
            <button
              type="button"
              onClick={() => append({ city: '', duration: 1, order: fields.length })}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Destination
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Trip Preferences</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Travel Modes
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {['plane', 'train', 'car', 'bus'].map((mode) => (
                  <label key={mode} className="relative flex items-center p-3 rounded-md border border-gray-200 bg-white shadow-sm cursor-pointer hover:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500">
                    <input
                      type="checkbox"
                      {...register('travelModes')}
                      value={mode}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-900 capitalize">{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Accommodation Type
              </label>
              <select
                {...register('accommodationType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="hotel">Hotel</option>
                <option value="airbnb">Airbnb / Short-term Rental</option>
                <option value="hostel">Hostel</option>
                <option value="resort">Resort</option>
                <option value="camping">Camping</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Activity Preferences
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  'sightseeing',
                  'adventure',
                  'relaxation',
                  'nightlife',
                  'family',
                  'culture',
                  'food',
                  'nature'
                ].map((activity) => (
                  <label key={activity} className="relative flex items-center p-3 rounded-md border border-gray-200 bg-white shadow-sm cursor-pointer hover:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500">
                    <input
                      type="checkbox"
                      {...register('activityPreferences')}
                      value={activity}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-900 capitalize">{activity}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  {...register('mealPlanning')}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm font-medium text-gray-900">
                  Include meal planning and recommendations
                </span>
              </label>
              <p className="mt-1 text-xs text-gray-500 ml-7">We'll suggest restaurants and cuisine options based on your destinations and preferences.</p>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-5">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Previous
          </button>
          {currentStep === steps.length - 1 ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Trip Plan...
                </>
              ) : (
                <>
                  Generate Trip Plan
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Next
              <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  )
} 