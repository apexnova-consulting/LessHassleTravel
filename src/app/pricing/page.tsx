import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    href: '/plan',
    price: { monthly: '$0', annually: '$0' },
    description: 'Perfect for trying out our service with a single destination.',
    features: [
      'Single-destination trip',
      'Basic itinerary',
      'Limited activity suggestions',
      'Budget breakdown',
      'PDF export (basic)'
    ],
    mostPopular: false,
  },
  {
    name: 'Explorer',
    id: 'tier-explorer',
    href: '/plan',
    price: { monthly: '$7', annually: '$59' },
    description: 'Ideal for frequent travelers looking to explore multiple cities.',
    features: [
      'Everything in Free, plus:',
      'Multi-city trips (up to 5 cities)',
      'Customizable itinerary',
      'Restaurant recommendations',
      'PDF exports with details',
      'Email sharing',
      'Save trip history',
    ],
    mostPopular: true,
  },
  {
    name: 'Pro Nomad',
    id: 'tier-pro',
    href: '/plan',
    price: { monthly: '$15', annually: '$120' },
    description: 'For serious travelers who want the ultimate planning experience.',
    features: [
      'Everything in Explorer, plus:',
      'Unlimited cities per trip',
      'AI restaurant/activity picks',
      'Past trip library',
      'Affiliate discount codes',
      'Priority support',
      'Advanced customization options',
      'Travel insights and analytics'
    ],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-primary-600">Pricing</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Plans for every traveler
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the perfect plan for your travel needs. All plans include our core AI planning technology.
        </p>
        
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'ring-2 ring-primary-600' : 'ring-1 ring-gray-200',
                  'rounded-3xl p-8 xl:p-10'
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h2 id={tier.id} className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-primary-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  or {tier.price.annually}/year ({tier.name === 'Free' ? 'free forever' : 'save 30%'})
                </p>
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-500'
                      : 'text-primary-600 ring-1 ring-inset ring-primary-200 hover:ring-primary-300',
                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
                  )}
                >
                  {tier.name === 'Free' ? 'Start planning for free' : 'Start with ' + tier.name}
                </Link>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-xl font-semibold text-gray-900">Need a custom solution?</h2>
          <p className="mt-2 text-base text-gray-600">
            Contact us for custom pricing options for large groups or corporate accounts.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  )
} 