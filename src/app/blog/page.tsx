import Link from 'next/link'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    title: '10 Tips for Planning a Multi-City European Adventure',
    href: '#',
    description:
      'Make the most of your European adventure with these essential planning tips for multi-city exploration.',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Planning Tips', href: '#' },
    author: {
      name: 'Sophie Martinez',
      role: 'Travel Writer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    imageUrl: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'How to Allocate Your Travel Budget Effectively',
    href: '#',
    description:
      'Learn how to distribute your travel budget across accommodation, food, activities, and transportation for the best experience.',
    date: 'Apr 20, 2023',
    datetime: '2023-04-20',
    category: { title: 'Budget Travel', href: '#' },
    author: {
      name: 'Michael Wong',
      role: 'Financial Travel Advisor',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    imageUrl: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'The Best AI Travel Planning Tools in 2023',
    href: '#',
    description:
      'Discover how artificial intelligence is revolutionizing travel planning and which tools you should be using.',
    date: 'May 5, 2023',
    datetime: '2023-05-05',
    category: { title: 'Travel Tech', href: '#' },
    author: {
      name: 'Alex Johnson',
      role: 'Tech Editor',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Hidden Gems: Underrated Cities to Include in Your Next Trip',
    href: '#',
    description:
      'Look beyond the typical tourist destinations and discover these amazing cities that should be on your travel radar.',
    date: 'Jun 12, 2023',
    datetime: '2023-06-12',
    category: { title: 'Destinations', href: '#' },
    author: {
      name: 'Emma Roberts',
      role: 'Travel Explorer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'A Food Lover\'s Guide to Planning a Culinary Adventure',
    href: '#',
    description:
      'Plan the ultimate food-focused trip with these tips for finding authentic local cuisine and unforgettable dining experiences.',
    date: 'Jul 5, 2023',
    datetime: '2023-07-05',
    category: { title: 'Food & Travel', href: '#' },
    author: {
      name: 'David Chen',
      role: 'Food & Travel Writer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'How to Create the Perfect Family Multi-City Itinerary',
    href: '#',
    description:
      'Family travel requires special considerations. Learn how to plan a multi-city trip that will keep everyone happy.',
    date: 'Aug 22, 2023',
    datetime: '2023-08-22',
    category: { title: 'Family Travel', href: '#' },
    author: {
      name: 'Sarah Thompson',
      role: 'Family Travel Expert',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    imageUrl: 'https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?q=80&w=2070&auto=format&fit=crop'
  },
]

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Travel Planning Blog</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Helpful articles and guides to make your multi-city travel planning easier.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="h-10 w-10 relative rounded-full bg-gray-100">
                    <Image
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="#"
            className="inline-flex items-center rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  )
} 