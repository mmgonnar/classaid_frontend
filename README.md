# ClassAid - Teacher's Daily Tools Application

ClassAid is a modern web application designed to help teachers streamline their daily tasks and classroom management. This project provides essential tools and features that make teaching more efficient and organized, showcasing modern web development practices and user-friendly design.

## Project Structure

The project is organized into a modular structure:

- **Components**: React components for UI elements
- **Utils**: Utility functions and API services
- **Styles**: CSS and styling utilities

## Features

### Frontend

- Real-time weather information for planning outdoor activities
- Temperature and weather conditions display
- Wind speed information for safety considerations
- Loading states with skeleton loader
- Error handling for API and geolocation errors
- Responsive design for all devices
- Clean and modern UI optimized for educational use

## Technologies Used

### Frontend

- React 18+
- Next.js 14
- Tailwind CSS
- Open-Meteo API (for weather information)
- Geolocation API

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mmgonnar/classaid_frontend
   ```

2. Navigate to the project directory:

   ```bash
   cd classaid
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to http://localhost:3000

## API Integration

The application uses the Open-Meteo API for weather data to help teachers plan outdoor activities:

- Base URL: `https://api.open-meteo.com/v1/forecast`
- Endpoints:
  - Current weather
  - Temperature
  - Wind speed
  - Hourly forecasts

## Component Structure

### Weather Component

- Handles geolocation for local weather
- Manages API calls for weather data
- Displays weather information
- Handles loading and error states

### API Service

- Modular API class for weather data
- Error handling
- Data transformation

## Development

### Key Features

- Component-based architecture
- Error boundary implementation
- Loading states with skeleton loader
- Responsive design with Tailwind CSS
- Teacher-focused interface

### Best Practices

- Clean code structure
- Error handling
- Loading states
- Modular API service
- Type safety
- Accessibility considerations for educational use

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Email:** [mmgonnar@gmail.com](mailto:mmgonnar@gmail.com)
- **LinkedIn:** [/mmgonnar](https://www.linkedin.com/in/mmgonnar/)
- **Twitter:** [@mmgonnar](https://x.com/mmgonnar)

Your feedback and contributions are welcome! This project aims to make teaching more efficient and enjoyable.
