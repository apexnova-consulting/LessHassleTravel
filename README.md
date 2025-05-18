# Less Hassle Travel - Smart Multi-City Trip Planning Platform

A modern web application that helps users plan multi-city trips with ease, featuring intelligent budget allocation, personalized recommendations, and comprehensive itinerary generation.

## Features

- 🎯 Multi-step trip planning form
- 💰 Smart budget allocation across destinations
- 🗺️ Multi-city route planning
- 🏨 Accommodation recommendations
- 🍽️ Meal planning and restaurant suggestions
- 🎡 Activity recommendations based on preferences
- 📱 Responsive design for all devices
- 📊 Visual itinerary generation
- 📄 Downloadable trip plans

## Tech Stack

- **Frontend Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns
- **Maps Integration**: Mapbox GL
- **UI Components**: Headless UI
- **Icons**: Heroicons

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lesshassletravel.git
   cd lesshassletravel
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── plan/           # Trip planning page
│   └── how-it-works/   # How it works page
├── components/         # React components
│   ├── forms/         # Form components
│   ├── layout/        # Layout components
│   ├── map/           # Map components
│   └── ui/            # UI components
├── lib/               # Utility functions and configurations
│   ├── api/          # API client and endpoints
│   ├── utils/        # Helper functions
│   └── validators/   # Zod validation schemas
├── types/            # TypeScript type definitions
└── styles/           # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)
- [Mapbox](https://www.mapbox.com/)
