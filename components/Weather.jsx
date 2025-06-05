'use client';

import { useEffect, useState } from 'react';

import api from '../utils/Api/Api';
import Loader from './loaders/SpinnerLoader';
import SpinnerLoader from './loaders/SpinnerLoader';
//import SkeletonLoader from './loaders/SkeletonLoader';

function Weather() {
  const [temp, setTemp] = useState(null);
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
            setTemp(data);
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
  // TODO ternario
  if (loading) return <SpinnerLoader />;
  if (error) return <div className="error">{error}</div>;
  if (!temp) return null;

  return (
    <div className="flex flex-col pb-8 text-left text-neutral-400">
      <h2>Current weather</h2>
      <p>Temperature: {temp.temperature}°C</p>
    </div>
  );
}

export default Weather;
