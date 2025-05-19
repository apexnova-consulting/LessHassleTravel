/**
 * GeoNames API client for city search
 * To use this service:
 * 1. Create a free account at: https://www.geonames.org/login
 * 2. Set your username in the .env.local file:
 *    GEONAMES_USERNAME=your_username
 */

// A reasonable default for development (replace with your own username)
const DEFAULT_USERNAME = 'demo';

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
      return [];
    }
    
    const data = await response.json();
    
    if (!data.geonames || !Array.isArray(data.geonames)) {
      console.error('Unexpected GeoNames API response format');
      return [];
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
    return [];
  }
} 