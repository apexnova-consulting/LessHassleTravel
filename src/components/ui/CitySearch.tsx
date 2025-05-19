'use client'

import { useState, useEffect, useRef } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

interface City {
  name: string
  country: string
  countryCode?: string
  region?: string
  population?: number
}

interface CitySearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  error?: string
}

// More comprehensive city data
const CITIES: City[] = [
  { name: 'Paris', country: 'France', countryCode: 'FR', region: 'Île-de-France', population: 2161000 },
  { name: 'London', country: 'United Kingdom', countryCode: 'GB', region: 'England', population: 8982000 },
  { name: 'New York', country: 'United States', countryCode: 'US', region: 'New York', population: 8419000 },
  { name: 'Tokyo', country: 'Japan', countryCode: 'JP', region: 'Kanto', population: 13960000 },
  { name: 'Barcelona', country: 'Spain', countryCode: 'ES', region: 'Catalonia', population: 1620000 },
  { name: 'Rome', country: 'Italy', countryCode: 'IT', region: 'Lazio', population: 2873000 },
  { name: 'Berlin', country: 'Germany', countryCode: 'DE', region: 'Berlin', population: 3670000 },
  { name: 'Amsterdam', country: 'Netherlands', countryCode: 'NL', region: 'North Holland', population: 821000 },
  { name: 'Sydney', country: 'Australia', countryCode: 'AU', region: 'New South Wales', population: 5312000 },
  { name: 'Dubai', country: 'United Arab Emirates', countryCode: 'AE', region: 'Dubai', population: 3331000 },
  { name: 'Istanbul', country: 'Turkey', countryCode: 'TR', region: 'Marmara', population: 15460000 },
  { name: 'Singapore', country: 'Singapore', countryCode: 'SG', region: 'Central Region', population: 5686000 },
  { name: 'Bangkok', country: 'Thailand', countryCode: 'TH', region: 'Central Thailand', population: 8281000 },
  { name: 'Hong Kong', country: 'China', countryCode: 'CN', region: 'Hong Kong', population: 7482000 },
  { name: 'Los Angeles', country: 'United States', countryCode: 'US', region: 'California', population: 3990000 },
  { name: 'Chicago', country: 'United States', countryCode: 'US', region: 'Illinois', population: 2706000 },
  { name: 'Miami', country: 'United States', countryCode: 'US', region: 'Florida', population: 467000 },
  { name: 'Toronto', country: 'Canada', countryCode: 'CA', region: 'Ontario', population: 2930000 },
  { name: 'Vancouver', country: 'Canada', countryCode: 'CA', region: 'British Columbia', population: 675000 },
  { name: 'San Francisco', country: 'United States', countryCode: 'US', region: 'California', population: 884000 },
  { name: 'Seattle', country: 'United States', countryCode: 'US', region: 'Washington', population: 744000 },
  { name: 'Boston', country: 'United States', countryCode: 'US', region: 'Massachusetts', population: 694000 },
  { name: 'Rio de Janeiro', country: 'Brazil', countryCode: 'BR', region: 'Rio de Janeiro', population: 6748000 },
  { name: 'Mexico City', country: 'Mexico', countryCode: 'MX', region: 'Mexico City', population: 9209000 },
  { name: 'Madrid', country: 'Spain', countryCode: 'ES', region: 'Madrid', population: 3223000 },
  { name: 'Lisbon', country: 'Portugal', countryCode: 'PT', region: 'Lisbon', population: 505000 },
  { name: 'Vienna', country: 'Austria', countryCode: 'AT', region: 'Vienna', population: 1897000 },
  { name: 'Prague', country: 'Czech Republic', countryCode: 'CZ', region: 'Prague', population: 1309000 },
  { name: 'Budapest', country: 'Hungary', countryCode: 'HU', region: 'Central Hungary', population: 1752000 },
  { name: 'Athens', country: 'Greece', countryCode: 'GR', region: 'Attica', population: 664000 },
  { name: 'Copenhagen', country: 'Denmark', countryCode: 'DK', region: 'Capital Region', population: 602000 },
  { name: 'Oslo', country: 'Norway', countryCode: 'NO', region: 'Oslo', population: 693000 },
  { name: 'Stockholm', country: 'Sweden', countryCode: 'SE', region: 'Stockholm County', population: 965000 },
  { name: 'Helsinki', country: 'Finland', countryCode: 'FI', region: 'Uusimaa', population: 656000 },
  { name: 'Munich', country: 'Germany', countryCode: 'DE', region: 'Bavaria', population: 1471000 },
  { name: 'Milan', country: 'Italy', countryCode: 'IT', region: 'Lombardy', population: 1352000 },
  { name: 'Naples', country: 'Italy', countryCode: 'IT', region: 'Campania', population: 967000 },
  { name: 'Florence', country: 'Italy', countryCode: 'IT', region: 'Tuscany', population: 382000 },
  { name: 'Venice', country: 'Italy', countryCode: 'IT', region: 'Veneto', population: 261000 },
  { name: 'Bari', country: 'Italy', countryCode: 'IT', region: 'Apulia', population: 324000 },
  { name: 'Melbourne', country: 'Australia', countryCode: 'AU', region: 'Victoria', population: 5078000 },
  { name: 'Brisbane', country: 'Australia', countryCode: 'AU', region: 'Queensland', population: 2560000 },
  { name: 'Perth', country: 'Australia', countryCode: 'AU', region: 'Western Australia', population: 2059000 },
  { name: 'Auckland', country: 'New Zealand', countryCode: 'NZ', region: 'Auckland', population: 1657000 },
  { name: 'Dublin', country: 'Ireland', countryCode: 'IE', region: 'Leinster', population: 554000 },
  { name: 'Edinburgh', country: 'United Kingdom', countryCode: 'GB', region: 'Scotland', population: 482000 },
  { name: 'Glasgow', country: 'United Kingdom', countryCode: 'GB', region: 'Scotland', population: 612000 },
  { name: 'Manchester', country: 'United Kingdom', countryCode: 'GB', region: 'England', population: 547000 },
  { name: 'Liverpool', country: 'United Kingdom', countryCode: 'GB', region: 'England', population: 494000 },
  { name: 'Brussels', country: 'Belgium', countryCode: 'BE', region: 'Brussels-Capital', population: 181000 },
  { name: 'Las Vegas', country: 'United States', countryCode: 'US', region: 'Nevada', population: 651000 },
  { name: 'San Diego', country: 'United States', countryCode: 'US', region: 'California', population: 1423000 },
  { name: 'Orlando', country: 'United States', countryCode: 'US', region: 'Florida', population: 286000 },
  { name: 'New Orleans', country: 'United States', countryCode: 'US', region: 'Louisiana', population: 391000 },
  { name: 'Austin', country: 'United States', countryCode: 'US', region: 'Texas', population: 964000 },
  { name: 'Denver', country: 'United States', countryCode: 'US', region: 'Colorado', population: 716000 },
  { name: 'Nashville', country: 'United States', countryCode: 'US', region: 'Tennessee', population: 669000 },
  { name: 'Phoenix', country: 'United States', countryCode: 'US', region: 'Arizona', population: 1660000 },
  { name: 'Portland', country: 'United States', countryCode: 'US', region: 'Oregon', population: 654000 },
  { name: 'Philadelphia', country: 'United States', countryCode: 'US', region: 'Pennsylvania', population: 1584000 },
  { name: 'Atlanta', country: 'United States', countryCode: 'US', region: 'Georgia', population: 506000 },
  { name: 'Washington DC', country: 'United States', countryCode: 'US', region: 'District of Columbia', population: 702000 },
  { name: 'Honolulu', country: 'United States', countryCode: 'US', region: 'Hawaii', population: 347000 },
  { name: 'Cancun', country: 'Mexico', countryCode: 'MX', region: 'Quintana Roo', population: 888000 },
  { name: 'Montreal', country: 'Canada', countryCode: 'CA', region: 'Quebec', population: 1780000 },
  { name: 'Quebec City', country: 'Canada', countryCode: 'CA', region: 'Quebec', population: 542000 },
  { name: 'Calgary', country: 'Canada', countryCode: 'CA', region: 'Alberta', population: 1336000 },
  { name: 'Phuket', country: 'Thailand', countryCode: 'TH', region: 'Southern Thailand', population: 416000 },
  { name: 'Bali', country: 'Indonesia', countryCode: 'ID', region: 'Bali', population: 4317000 },
  { name: 'Seoul', country: 'South Korea', countryCode: 'KR', region: 'Seoul', population: 9776000 },
  { name: 'Shanghai', country: 'China', countryCode: 'CN', region: 'Shanghai', population: 26320000 },
  { name: 'Beijing', country: 'China', countryCode: 'CN', region: 'Beijing', population: 21540000 },
  { name: 'Cairo', country: 'Egypt', countryCode: 'EG', region: 'Cairo Governorate', population: 9540000 },
  { name: 'Cape Town', country: 'South Africa', countryCode: 'ZA', region: 'Western Cape', population: 4618000 },
  { name: 'Marrakech', country: 'Morocco', countryCode: 'MA', region: 'Marrakech-Safi', population: 928000 },
  { name: 'Buenos Aires', country: 'Argentina', countryCode: 'AR', region: 'Buenos Aires', population: 3075000 },
  { name: 'Lima', country: 'Peru', countryCode: 'PE', region: 'Lima Province', population: 10720000 },
  { name: 'Cusco', country: 'Peru', countryCode: 'PE', region: 'Cusco Region', population: 428000 },
  { name: 'Santiago', country: 'Chile', countryCode: 'CL', region: 'Santiago Metropolitan', population: 6269000 },
  { name: 'Bogotá', country: 'Colombia', countryCode: 'CO', region: 'Capital District', population: 7412000 },
  { name: 'Moscow', country: 'Russia', countryCode: 'RU', region: 'Moscow', population: 12537000 },
  { name: 'St. Petersburg', country: 'Russia', countryCode: 'RU', region: 'Northwestern', population: 5383000 },
  { name: 'Kiev', country: 'Ukraine', countryCode: 'UA', region: 'Kiev City', population: 2962000 },
  { name: 'Warsaw', country: 'Poland', countryCode: 'PL', region: 'Masovian', population: 1765000 },
  { name: 'Zurich', country: 'Switzerland', countryCode: 'CH', region: 'Zurich', population: 402000 },
  { name: 'Geneva', country: 'Switzerland', countryCode: 'CH', region: 'Geneva', population: 201000 },
];

export default function CitySearch({ value, onChange, placeholder = 'Search for a city', className = '', error }: CitySearchProps) {
  const [inputValue, setInputValue] = useState(value)
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<City[]>([])
  const debouncedValue = useDebounce(inputValue, 200)
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
      setIsOpen(false)
      return
    }

    const searchTerm = debouncedValue.toLowerCase()
    
    // More comprehensive search logic
    const filteredCities = CITIES.filter(city => {
      const cityName = city.name.toLowerCase()
      const countryName = city.country.toLowerCase()
      const regionName = city.region?.toLowerCase() || ''
      
      // Search for matches in city name, country name, or region
      return cityName.includes(searchTerm) || 
             countryName.includes(searchTerm) || 
             regionName.includes(searchTerm) ||
             // Combined searches like "city, country"
             `${cityName}, ${countryName}`.includes(searchTerm) ||
             `${cityName} ${countryName}`.includes(searchTerm)
    }).slice(0, 10) // Limit to top 10 results
    
    setSuggestions(filteredCities)
    setIsOpen(filteredCities.length > 0)
  }, [debouncedValue])

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
    // Show suggestions on focus if we have input
    if (debouncedValue.trim() !== '' && suggestions.length > 0) {
      setIsOpen(true)
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
                <span className="text-xs text-gray-500">{city.region} • {city.population?.toLocaleString()} people</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 