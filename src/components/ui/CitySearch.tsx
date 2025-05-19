'use client'

import { useState, useEffect, useRef } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

interface City {
  name: string
  country: string
}

interface CitySearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  error?: string
}

// Mock city data - in a real app, this would come from an API
const CITIES: City[] = [
  { name: 'New York', country: 'USA' },
  { name: 'London', country: 'UK' },
  { name: 'Paris', country: 'France' },
  { name: 'Tokyo', country: 'Japan' },
  { name: 'Sydney', country: 'Australia' },
  { name: 'Rome', country: 'Italy' },
  { name: 'Berlin', country: 'Germany' },
  { name: 'Barcelona', country: 'Spain' },
  { name: 'Amsterdam', country: 'Netherlands' },
  { name: 'Singapore', country: 'Singapore' },
  { name: 'Dubai', country: 'UAE' },
  { name: 'San Francisco', country: 'USA' },
  { name: 'Los Angeles', country: 'USA' },
  { name: 'Chicago', country: 'USA' },
  { name: 'Miami', country: 'USA' },
  { name: 'Toronto', country: 'Canada' },
  { name: 'Vancouver', country: 'Canada' },
  { name: 'Hong Kong', country: 'China' },
  { name: 'Bangkok', country: 'Thailand' },
  { name: 'Seoul', country: 'South Korea' },
]

export default function CitySearch({ value, onChange, placeholder = 'Search for a city', className = '', error }: CitySearchProps) {
  const [inputValue, setInputValue] = useState(value)
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<City[]>([])
  const debouncedValue = useDebounce(inputValue, 300)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Update suggestions when input changes
  useEffect(() => {
    if (debouncedValue.trim() === '') {
      setSuggestions([])
      return
    }

    const searchTerm = debouncedValue.toLowerCase()
    const filteredCities = CITIES.filter(city =>
      city.name.toLowerCase().includes(searchTerm) || 
      city.country.toLowerCase().includes(searchTerm)
    )

    setSuggestions(filteredCities)
    setIsOpen(filteredCities.length > 0)
  }, [debouncedValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSelect = (city: City) => {
    setInputValue(city.name)
    onChange(city.name)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={containerRef}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={() => debouncedValue.trim() !== '' && setSuggestions.length > 0 && setIsOpen(true)}
        placeholder={placeholder}
        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${className}`}
      />
      
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {suggestions.map((city, index) => (
            <div
              key={index}
              className="relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-gray-100"
              onClick={() => handleSelect(city)}
            >
              <div className="flex items-center">
                <span className="font-medium">{city.name}</span>
                <span className="ml-2 text-gray-500">{city.country}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 