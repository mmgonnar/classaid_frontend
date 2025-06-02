'use client';

import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';

//Weather
// class WeatherApi {
//   constructor(baseUrl) {
//     this.baseUrl = baseUrl;
//   }

//   getCurrentWeather(latitude, longitude) {
//     const url = `${this.baseUrl}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

//     return fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Error en la respuesta de la API');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         return {
//           temperature: data.current.temperature_2m,
//           windSpeed: data.current.wind_speed_10m,
//           hourly: data.hourly,
//         };
//       });
//   }
// }

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error, 'ERROR');
      console.error('Error creating user');
      throw error;
    }
  }

  async post(path, body) {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error en la solicitud POST');
      }
      return data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      throw error;
    }
  }
}

const api = new Api('/api');

export default api;
