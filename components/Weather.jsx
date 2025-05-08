'use client';

import { useEffect, useState } from 'react';

import api from '../utils/Api';
import Loader from './Loader';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(api);
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
        console.error('Weather error', error);
      },
    );
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="error">{error}</div>;
  if (!weatherData) return null;

  return (
    <div className="text-whit flex flex-col pb-8 text-right">
      <h2>Current weather</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
    </div>
  );
}

export default Weather;
