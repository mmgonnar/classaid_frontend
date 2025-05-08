'use client';
//TODO

// navigator.geolocation.getCurrentPosition((pos)=>{

//   fetch("https://api.open-meteo.com/v1/forecast?latitude="+ pos.coords.latitude+"&longitude="+pos.coords.longitude+"&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
// })

class WeatherApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getCurrentWeather(latitude, longitude) {
    const url = `${this.baseUrl}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then((data) => {
        return {
          temperature: data.current.temperature_2m,
          windSpeed: data.current.wind_speed_10m,
          hourly: data.hourly,
        };
      });
  }
}

const api = new WeatherApi('https://api.open-meteo.com/v1/forecast');

export default api;
