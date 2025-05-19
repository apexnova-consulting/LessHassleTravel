/**
 * Generates booking links for hotels, flights, and activities
 * Uses public booking sites with affiliate-friendly URLs
 */

interface BookingLinkOptions {
  // Basic info
  city: string;
  country?: string;
  checkIn?: Date;
  checkOut?: Date;
  
  // For flights
  originCity?: string;
  
  // For hotels
  hotelName?: string;
  
  // For activities
  activityName?: string;
}

/**
 * Creates a Booking.com hotel search link
 */
export function getHotelLink(options: BookingLinkOptions): string {
  const { city, country, checkIn, checkOut, hotelName } = options;
  
  // Base URL for hotel search on Booking.com
  let url = 'https://www.booking.com/searchresults.html?';
  
  // Add destination
  url += `ss=${encodeURIComponent(city)}`;
  if (country) {
    url += `%2C+${encodeURIComponent(country)}`;
  }
  
  // Add dates if available
  if (checkIn && checkOut) {
    const checkInStr = formatDate(checkIn);
    const checkOutStr = formatDate(checkOut);
    url += `&checkin=${checkInStr}&checkout=${checkOutStr}`;
  }
  
  // Add specific hotel name if available
  if (hotelName) {
    url += `&dest_id=&dest_type=&group_adults=2&group_children=0&no_rooms=1&sb_travel_purpose=leisure&search_selected=true&ss_raw=${encodeURIComponent(hotelName)}`;
  }
  
  return url;
}

/**
 * Creates a Skyscanner flight search link
 */
export function getFlightLink(options: BookingLinkOptions): string {
  const { city, country, originCity, checkIn, checkOut } = options;
  
  // Base URL for flight search on Skyscanner
  let url = 'https://www.skyscanner.com/transport/flights/';
  
  // Add origin and destination
  // Use generic 'anywhere' if origin is not provided
  const origin = originCity ? encodeOriginOrDestination(originCity) : 'anyw';
  const destination = encodeOriginOrDestination(city);
  
  url += `${origin}/${destination}/`;
  
  // Add dates if available
  if (checkIn && checkOut) {
    const checkInStr = formatSkyscannerDate(checkIn);
    const checkOutStr = formatSkyscannerDate(checkOut);
    url += `${checkInStr}/${checkOutStr}/`;
  } else {
    // If no dates, use 'anytime'
    url += 'anytime/';
  }
  
  return url;
}

/**
 * Creates a GetYourGuide activity search link
 */
export function getActivityLink(options: BookingLinkOptions): string {
  const { city, activityName } = options;
  
  // Base URL for activities on GetYourGuide
  let url = 'https://www.getyourguide.com/';
  
  // Format city name for URL
  const formattedCity = city.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  url += `${formattedCity}-l`;
  
  // Add activity name if available
  if (activityName) {
    // Format activity name for search
    const formattedActivity = activityName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    url += `/s?q=${encodeURIComponent(activityName)}`;
  }
  
  return url;
}

// Helper functions
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

function formatSkyscannerDate(date: Date): string {
  return date.toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD
}

function encodeOriginOrDestination(city: string): string {
  // Simple conversion: lowercase, replace spaces with hyphens, limit to 4 chars
  // In a real implementation, you would use a city code database
  return city.toLowerCase().replace(/[^a-z]/g, '').slice(0, 4);
} 