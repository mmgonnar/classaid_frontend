'use client';

import { useEffect, useState } from 'react';
import PreLoader from './PreLoader';
import api from '../utils/Api';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        api
          .getCurrentWeather(position.coords.latitude, position.coords.longitude)
          .then((data) => {
            setWeatherData(data);
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          })
          .catch((error) => {
            setError('Error getting the weather');
            setLoading(false);
          });
      },
      (error) => {
        setError('Error getting location');
        setLoading(false);
      },
    );
  }, []);

  if (loading) return <PreLoader />;
  if (error) return <div className="error">{error}</div>;
  if (!weatherData) return null;

  return (
    <div className="weather-container">
      <h2>Clima Actual</h2>
      <p>Temperatura: {weatherData.temperature}°C</p>
      <p>Velocidad del viento: {weatherData.windSpeed} km/h</p>
    </div>
  );
}

export default Weather;
