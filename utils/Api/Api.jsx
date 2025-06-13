'use client';

import { getToken } from '../token';

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

  getHeaders() {
    const token = getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  async getUserInfo() {
    try {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: 'GET',
        headers: this.getHeaders(),
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      return data;
    } catch (error) {}
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async deleteAllUsers() {
    try {
      const response = await fetch(`${this.baseUrl}/users/deleteAll`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error deleting users');
      }
      return data;
    } catch (error) {
      console.error('Error deleting users:', error);
      throw error;
    }
  }
}

const api = new Api('/api');

export default api;
