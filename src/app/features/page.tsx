import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    name: 'Multi-City Planning',
    description: 'Seamlessly plan trips that span multiple destinations, with optimized routes and timing between each city. Our smart algorithms help you maximize your time in each location while minimizing travel hassle.',
    icon: '/icons/map.svg'
  },
  {
    name: 'Budget Optimization',
    description: 'Set your total budget and let our AI distribute funds optimally across accommodations, transportation, activities, and meals. Ensure you are getting the most value without overspending.',
    icon: '/icons/budget.svg'
  },
  {
    name: 'AI Recommendations',
    description: 'Receive personalized suggestions for activities, restaurants, and lodging based on your preferences, travel style, and budget. Our AI learns what you like to make better recommendations.',
    icon: '/icons/ai.svg'
  },
  {
    name: 'Interactive Itineraries',
    description: 'View and modify detailed day-by-day travel plans with interactive maps and scheduling. Make adjustments on the fly and see how they affect your overall trip.',
    icon: '/icons/calendar.svg'
  },
  {
    name: 'Local Insights',
    description: 'Access crowdsourced tips and advice from locals and experienced travelers who know your destination. Discover hidden gems and authentic experiences off the typical tourist path.',
    icon: '/icons/locals.svg'
  },
  {
    name: 'Travel Documentation',
    description: 'Keep all your bookings, reservations, and important documents in one secure place. Access them offline and get timely reminders about check-ins, departures, and reservations.',
    icon: '/icons/document.svg'
  },
  {
    name: 'Weather Integration',
    description: 'Automatically integrate seasonal and daily weather forecasts into your planning process. Get packing suggestions and activity alternatives for rainy days.',
    icon: '/icons/weather.svg'
  },
  {
    name: 'Trip Sharing',
    description: 'Collaborate with travel companions on itinerary planning, or share your completed trip plans with friends and family for safety and coordination.',
    icon: '/icons/share.svg'
  }
]

export default function FeaturesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Smarter Travel Planning</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features That Make Travel Planning Effortless
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Less Hassle Travel combines cutting-edge AI with practical travel tools to create a seamless planning experience. Discover how our features can transform your next trip.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <Image src={feature.icon} alt="" width={24} height={24} className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="mt-20 text-center">
          <Link
            href="/plan"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Start Planning Your Trip
          </Link>
        </div>
      </div>
    </div>
  )
} 