/**
 * GeoNames API client for city search
 * To use this service:
 * 1. Create a free account at: https://www.geonames.org/login
 * 2. Set your username in the .env.local file:
 *    GEONAMES_USERNAME=your_username
 */

// A reasonable default for development (replace with your own username)
const DEFAULT_USERNAME = 'demo';

// Comprehensive list of popular cities for fallback
const POPULAR_CITIES: City[] = [
  { name: 'New York City', country: 'United States', countryCode: 'US', region: 'New York', population: 8419000, lat: 40.7128, lng: -74.0060 },
  { name: 'London', country: 'United Kingdom', countryCode: 'GB', region: 'England', population: 8982000, lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', country: 'France', countryCode: 'FR', region: 'Île-de-France', population: 2161000, lat: 48.8566, lng: 2.3522 },
  { name: 'Tokyo', country: 'Japan', countryCode: 'JP', region: 'Kanto', population: 13960000, lat: 35.6762, lng: 139.6503 },
  { name: 'Sydney', country: 'Australia', countryCode: 'AU', region: 'New South Wales', population: 5312000, lat: -33.8688, lng: 151.2093 },
  { name: 'Rome', country: 'Italy', countryCode: 'IT', region: 'Lazio', population: 2873000, lat: 41.9028, lng: 12.4964 },
  { name: 'Barcelona', country: 'Spain', countryCode: 'ES', region: 'Catalonia', population: 1621000, lat: 41.3851, lng: 2.1734 },
  { name: 'Berlin', country: 'Germany', countryCode: 'DE', region: 'Berlin', population: 3645000, lat: 52.5200, lng: 13.4050 },
  { name: 'Amsterdam', country: 'Netherlands', countryCode: 'NL', region: 'North Holland', population: 872680, lat: 52.3676, lng: 4.9041 },
  { name: 'Las Vegas', country: 'United States', countryCode: 'US', region: 'Nevada', population: 651000, lat: 36.1699, lng: -115.1398 },
  { name: 'Dubai', country: 'United Arab Emirates', countryCode: 'AE', region: 'Dubai', population: 3137000, lat: 25.2048, lng: 55.2708 },
  { name: 'Singapore', country: 'Singapore', countryCode: 'SG', region: 'Singapore', population: 5612000, lat: 1.3521, lng: 103.8198 },
  { name: 'Hong Kong', country: 'China', countryCode: 'CN', region: 'Hong Kong', population: 7482500, lat: 22.3193, lng: 114.1694 },
  { name: 'Bangkok', country: 'Thailand', countryCode: 'TH', region: 'Bangkok', population: 8281000, lat: 13.7563, lng: 100.5018 },
  { name: 'Istanbul', country: 'Turkey', countryCode: 'TR', region: 'Istanbul', population: 15460000, lat: 41.0082, lng: 28.9784 },
  { name: 'Rio de Janeiro', country: 'Brazil', countryCode: 'BR', region: 'Rio de Janeiro', population: 6748000, lat: -22.9068, lng: -43.1729 },
  { name: 'Cape Town', country: 'South Africa', countryCode: 'ZA', region: 'Western Cape', population: 4618000, lat: -33.9249, lng: 18.4241 },
  { name: 'Toronto', country: 'Canada', countryCode: 'CA', region: 'Ontario', population: 2930000, lat: 43.6532, lng: -79.3832 },
  { name: 'Chicago', country: 'United States', countryCode: 'US', region: 'Illinois', population: 2710000, lat: 41.8781, lng: -87.6298 },
  { name: 'Mumbai', country: 'India', countryCode: 'IN', region: 'Maharashtra', population: 12480000, lat: 19.0760, lng: 72.8777 }
];

interface GeoNamesCity {
  geonameId: number;
  name: string;
  countryName: string;
  countryCode: string;
  adminName1?: string; // Region/state
  population?: number;
  lat?: string;
  lng?: string;
  toponymName?: string;
}

export interface City {
  name: string;
  country: string;
  countryCode: string;
  region?: string;
  population?: number;
  lat?: number;
  lng?: number;
}

export async function searchCities(query: string): Promise<City[]> {
  if (!query || query.trim().length < 2) return [];
  
  try {
    // Use environment variable if available, fallback to demo account
    const username = process.env.GEONAMES_USERNAME || DEFAULT_USERNAME;
    
    const response = await fetch(
      `https://secure.geonames.org/searchJSON?q=${encodeURIComponent(query)}&maxRows=10&username=${username}&featureClass=P&style=full&orderby=relevance`
    );
    
    if (!response.ok) {
      console.error('GeoNames API error:', response.statusText);
      return getFilteredFallbackCities(query);
    }
    
    const data = await response.json();
    
    if (!data.geonames || !Array.isArray(data.geonames) || data.geonames.length === 0) {
      console.error('No results from GeoNames API or unexpected format');
      return getFilteredFallbackCities(query);
    }
    
    return data.geonames.map((city: GeoNamesCity) => ({
      name: city.name,
      country: city.countryName,
      countryCode: city.countryCode,
      region: city.adminName1,
      population: city.population || 0,
      lat: city.lat ? parseFloat(city.lat) : undefined,
      lng: city.lng ? parseFloat(city.lng) : undefined
    }));
    
  } catch (error) {
    console.error('Error fetching from GeoNames API:', error);
    return getFilteredFallbackCities(query);
  }
}

// Helper function to filter the fallback cities based on search query
function getFilteredFallbackCities(query: string): City[] {
  const searchTerm = query.toLowerCase();
  
  return POPULAR_CITIES.filter(city => {
    const cityName = city.name.toLowerCase();
    const countryName = city.country.toLowerCase();
    const regionName = city.region?.toLowerCase() || '';
    
    return cityName.includes(searchTerm) || 
           countryName.includes(searchTerm) || 
           regionName.includes(searchTerm) ||
           `${cityName}, ${countryName}`.includes(searchTerm);
  });
} 