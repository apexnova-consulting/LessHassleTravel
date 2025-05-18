import TripPlanningForm from '@/components/forms/TripPlanningForm'

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Plan Your Trip
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Fill out the form below to get started with your personalized travel plan.
          </p>
        </div>
        <div className="mt-8">
          <TripPlanningForm />
        </div>
      </div>
    </div>
  )
} 