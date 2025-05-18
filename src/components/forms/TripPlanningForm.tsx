'use client'

import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { tripPreferencesSchema } from '@/lib/validators/trip'
import type { TripPreferences, Destination, TripPlan } from '@/types/trip'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from 'next/navigation'

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
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Progress bar */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.id} className="md:flex-1">
              <div
                className={`group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 ${
                  index <= currentStep
                    ? 'border-indigo-600'
                    : 'border-gray-200'
                }`}
              >
                <span className="text-sm font-medium text-indigo-600">
                  Step {index + 1}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      {error && (
        <div className="mt-4 rounded-md bg-red-50 p-4">
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

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-8">
        {currentStep === 0 && (
          <div className="space-y-6">
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
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
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

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <DatePicker
                  selected={watch('startDate')}
                  onChange={(date) => register('startDate').onChange({ target: { value: date } })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  dateFormat="MM/dd/yyyy"
                />
                {errors.startDate && (
                  <p className="mt-2 text-sm text-red-600">{errors.startDate.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <DatePicker
                  selected={watch('endDate')}
                  onChange={(date) => register('endDate').onChange({ target: { value: date } })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  dateFormat="MM/dd/yyyy"
                />
                {errors.endDate && (
                  <p className="mt-2 text-sm text-red-600">{errors.endDate.message}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                Number of Adults
              </label>
              <input
                type="number"
                {...register('travelers.adults', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                min="0"
              />
              {errors.travelers?.children && (
                <p className="mt-2 text-sm text-red-600">{errors.travelers.children.message}</p>
              )}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-end space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Destination {index + 1}
                  </label>
                  <input
                    {...register(`destinations.${index}.city`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="City name"
                  />
                </div>
                <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700">
                    Duration (days)
                  </label>
                  <input
                    type="number"
                    {...register(`destinations.${index}.duration`, { valueAsNumber: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    min="1"
                  />
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
            <button
              type="button"
              onClick={() => append({ city: '', duration: 1, order: fields.length })}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Destination
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Travel Modes
              </label>
              <div className="mt-2 space-y-2">
                {['plane', 'train', 'car', 'bus'].map((mode) => (
                  <label key={mode} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      {...register('travelModes')}
                      value={mode}
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 capitalize">{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Accommodation Type
              </label>
              <select
                {...register('accommodationType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="hotel">Hotel</option>
                <option value="airbnb">Airbnb / Short-term Rental</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Activity Preferences
              </label>
              <div className="mt-2 space-y-2">
                {[
                  'sightseeing',
                  'adventure',
                  'relaxation',
                  'nightlife',
                  'family',
                  'culture',
                  'food'
                ].map((activity) => (
                  <label key={activity} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      {...register('activityPreferences')}
                      value={activity}
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 capitalize">{activity}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  {...register('mealPlanning')}
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Include meal planning and recommendations
                </span>
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-5">
          <button
            type="button"
            onClick={prevStep}
            className={`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              currentStep === 0 ? 'invisible' : ''
            }`}
          >
            Previous
          </button>
          {currentStep === steps.length - 1 ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                'Generate Trip Plan'
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  )
} 