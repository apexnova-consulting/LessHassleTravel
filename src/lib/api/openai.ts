/**
 * OpenAI integration for AI-powered trip planning
 * 
 * To use this service:
 * 1. Create an account at: https://platform.openai.com/
 * 2. Get your API key from: https://platform.openai.com/api-keys
 * 3. Set your API key in the .env.local file:
 *    OPENAI_API_KEY=your_api_key
 */

import { TripPreferences, TripPlan } from '@/types/trip';

const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

export async function generateTripPlan(preferences: TripPreferences): Promise<TripPlan> {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.error('OpenAI API key missing. Please set OPENAI_API_KEY in your .env.local file.');
      throw new Error('OpenAI API key is required for AI trip planning.');
    }
    
    // Format the preferences as a prompt for the AI
    const prompt = createTripPrompt(preferences);
    
    // Call OpenAI API
    const response = await fetch(OPENAI_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo-preview', // You can change to gpt-3.5-turbo for lower cost
        messages: [
          {
            role: 'system',
            content: 'You are an AI travel agent specializing in creating detailed trip plans. Your response should be in valid JSON format ONLY, with no additional text. Follow the schema exactly.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
        response_format: { type: 'json_object' }
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    const content = data.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error('Unexpected response format from OpenAI API');
    }
    
    // Parse the JSON response from OpenAI
    try {
      const tripPlan = JSON.parse(content);
      // Add the original preferences for reference
      tripPlan.preferences = preferences;
      
      return tripPlan;
    } catch (parseError) {
      console.error('Failed to parse OpenAI response as JSON:', parseError);
      throw new Error('Failed to generate trip plan: Invalid response format');
    }
  } catch (error) {
    console.error('Error generating trip plan with OpenAI:', error);
    throw error;
  }
}

// Create a detailed prompt for the AI to generate a trip plan
function createTripPrompt(preferences: TripPreferences): string {
  const { 
    totalBudget, 
    startDate, 
    endDate, 
    originCity,
    travelers, 
    destinations, 
    travelModes, 
    accommodationType, 
    activityPreferences, 
    mealPlanning 
  } = preferences;
  
  const tripDuration = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
  
  return `Create a detailed trip plan based on the following preferences:

- Total budget: $${totalBudget} USD
- Trip dates: ${formatDate(startDate)} to ${formatDate(endDate)} (${tripDuration} days)
- Origin city: ${originCity || 'Not specified'}
- Travelers: ${travelers.adults} adults${travelers.children > 0 ? ` and ${travelers.children} children` : ''}
- Destinations: ${destinations.map(d => `${d.city} (${d.duration} days)`).join(', ')}
- Preferred travel modes: ${travelModes.join(', ')}
- Accommodation type: ${accommodationType}
- Activity preferences: ${activityPreferences.join(', ')}
- Include meal planning: ${mealPlanning ? 'Yes' : 'No'}

Generate a comprehensive travel itinerary with daily plans for each day of the trip. For each day, include:
1. The destination city
2. Accommodation details (name, type, and estimated cost)
3. 2-3 activities based on the preferences (with name, duration in hours, and estimated cost)
4. Transportation details if changing cities (mode, from, to, duration, and cost)
5. If meal planning is requested, include breakfast, lunch, and dinner recommendations with estimated costs

Also include a budget breakdown showing the total costs for accommodation, transportation, activities, meals, and other expenses.

The response should follow this JSON structure:
{
  "id": "unique-id-string",
  "itinerary": {
    "dailyPlans": [
      {
        "date": "YYYY-MM-DD",
        "destination": "City, Country",
        "activities": [
          {
            "name": "Activity name",
            "duration": 3,
            "cost": 50
          }
        ],
        "meals": [
          {
            "type": "breakfast/lunch/dinner",
            "name": "Meal or restaurant name",
            "cost": 20
          }
        ],
        "accommodation": {
          "name": "Accommodation name",
          "type": "hotel/airbnb/resort/hostel",
          "cost": 150
        },
        "transportation": {
          "mode": "plane/train/car/bus",
          "from": "Origin City",
          "to": "Destination City",
          "cost": 200,
          "duration": 3
        }
      }
    ],
    "totalCost": 2500,
    "budgetBreakdown": {
      "accommodation": 800,
      "transportation": 600,
      "activities": 500,
      "meals": 450,
      "other": 150
    }
  }
}

Make sure the total costs fit within the budget of $${totalBudget}, and the destinations match those provided in the preferences.`;
}

// Format date as YYYY-MM-DD
function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toISOString().split('T')[0];
} 