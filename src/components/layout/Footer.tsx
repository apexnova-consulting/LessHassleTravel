'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/features" className="text-gray-500 hover:text-gray-900">
            Features
          </Link>
          <Link href="/how-it-works" className="text-gray-500 hover:text-gray-900">
            How It Works
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-900">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Less Hassle Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 