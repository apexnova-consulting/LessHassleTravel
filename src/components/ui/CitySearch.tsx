'use client'

import { useState, useEffect, useRef } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { searchCities, City } from '@/lib/api/geonames'

interface CitySearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  error?: string
}

// Fallback cities in case the API fails
const FALLBACK_CITIES: City[] = [
  { name: 'Paris', country: 'France', countryCode: 'FR', region: 'Île-de-France', population: 2161000 },
  { name: 'London', country: 'United Kingdom', countryCode: 'GB', region: 'England', population: 8982000 },
  { name: 'New York', country: 'United States', countryCode: 'US', region: 'New York', population: 8419000 },
  { name: 'Tokyo', country: 'Japan', countryCode: 'JP', region: 'Kanto', population: 13960000 },
  { name: 'Las Vegas', country: 'United States', countryCode: 'US', region: 'Nevada', population: 651000 },
];

export default function CitySearch({ value, onChange, placeholder = 'Search for a city', className = '', error }: CitySearchProps) {
  const [inputValue, setInputValue] = useState(value)
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<City[]>([])
  const [isLoading, setIsLoading] = useState(false)
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
    const fetchCities = async () => {
      if (debouncedValue.trim() === '') {
        setSuggestions([])
        setIsOpen(false)
        return
      }

      setIsLoading(true)
      try {
        const results = await searchCities(debouncedValue);
        setSuggestions(results);
        setIsOpen(results.length > 0);
      } catch (error) {
        console.error('Error searching cities:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, [debouncedValue])

  // Show dropdown on focus if there's input value
  useEffect(() => {
    if (inputValue.trim() !== '' && !isOpen) {
      const fetchInitialResults = async () => {
        setIsLoading(true);
        try {
          const results = await searchCities(inputValue);
          if (results.length > 0) {
            setSuggestions(results);
            setIsOpen(true);
          }
        } catch (error) {
          console.error('Error fetching initial city results:', error);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchInitialResults();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    // Don't update parent component until selection is made
  }

  const handleSelect = (city: City) => {
    // Format selection as "City, Country"
    const formattedValue = `${city.name}, ${city.country}`
    setInputValue(formattedValue)
    onChange(formattedValue) // Update the parent component
    setIsOpen(false)
  }

  const handleFocus = () => {
    // Always try to show suggestions on focus if we have input
    if (inputValue.trim() !== '') {
      const fetchOnFocus = async () => {
        if (suggestions.length === 0) {
          setIsLoading(true);
          try {
            const results = await searchCities(inputValue);
            setSuggestions(results);
            setIsOpen(results.length > 0);
          } catch (error) {
            console.error('Error fetching cities on focus:', error);
          } finally {
            setIsLoading(false);
          }
        } else {
          setIsOpen(true);
        }
      };
      
      fetchOnFocus();
    }
  }

  return (
    <div className="relative" ref={containerRef}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${className}`}
        autoComplete="off"
      />
      
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}

      {isLoading && (
        <div className="absolute right-3 top-2.5">
          <div className="animate-spin h-4 w-4 border-2 border-primary-500 rounded-full border-t-transparent"></div>
        </div>
      )}

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 max-h-72 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {suggestions.map((city, index) => (
            <div
              key={index}
              className="relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-gray-100"
              onClick={() => handleSelect(city)}
            >
              <div className="flex flex-col">
                <span className="font-medium">{city.name}, {city.country}</span>
                <span className="text-xs text-gray-500">
                  {city.region} {city.population ? `• ${city.population.toLocaleString()} people` : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 