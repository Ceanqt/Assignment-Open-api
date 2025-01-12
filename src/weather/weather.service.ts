import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly apiKey = 'f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026';
  private readonly apiHost = 'open-weather13.p.rapidapi.com';

  async getWeatherByLatLon(lat: string, lon: string) {
    try {
      const response = await axios.get(
        `https://${this.apiHost}/city/latlon/${lat}/${lon}`,
        {
          headers: {
            'X-Rapidapi-Key': this.apiKey,
            'X-Rapidapi-Host': this.apiHost,
          },
        },
      );

      const data = response.data;

      // Creative response formatting
      return {
        location: `🌍 Location: ${data.name}, ${data.sys.country}`,
        weatherSummary: `☀️ Current Weather: ${data.weather[0].description.toUpperCase()} (${data.weather[0].main})`,
        temperature: `🌡️ Temperature: ${this.kelvinToCelsius(data.main.temp)}°C (Feels like ${this.kelvinToCelsius(data.main.feels_like)}°C)`,
        details: {
          pressure: `${data.main.pressure} hPa`,
          humidity: `${data.main.humidity}%`,
          visibility: `${data.visibility / 1000} km`,
          wind: `🌬️ Speed: ${data.wind.speed} m/s, Direction: ${data.wind.deg}°`,
        },
        sunriseSunset: `🌅 Sunrise: ${this.formatTime(data.sys.sunrise + data.timezone)} | 🌇 Sunset: ${this.formatTime(data.sys.sunset + data.timezone)}`,
        additionalInfo: `Cloudiness: ${data.clouds.all}%`,
      };
    } catch (error) {
      throw new HttpException('Error fetching weather data', HttpStatus.BAD_REQUEST);
    }
  }

  private kelvinToCelsius(temp: number): string {
    return (temp - 273.15).toFixed(2);
  }

  private formatTime(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    return date.toUTCString().split(' ')[4];
  }

  async getWeatherByCity(city: string, lang: string) {
    try {
      const response = await axios.get(
        `https://${this.apiHost}/city/${city}/${lang}`,
        {
          headers: {
            'X-Rapidapi-Key': this.apiKey,
            'X-Rapidapi-Host': this.apiHost,
          },
        },
      );

      const data = response.data;

      // Customizing response
      return {
        location: {
          city: data.name,
          country: data.sys.country,
          coordinates: {
            latitude: data.coord.lat,
            longitude: data.coord.lon,
          },
        },
        weather: {
          condition: data.weather[0].main,
          description: data.weather[0].description,
          iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        },
        temperature: {
          current: `${data.main.temp}°C`,
          feelsLike: `${data.main.feels_like}°C`,
          min: `${data.main.temp_min}°C`,
          max: `${data.main.temp_max}°C`,
        },
        wind: {
          speed: `${data.wind.speed} m/s`,
          direction: `${data.wind.deg}°`,
        },
        visibility: `${data.visibility} meters`,
        pressure: `${data.main.pressure} hPa`,
        humidity: `${data.main.humidity}%`,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      };
    } catch (error) {
      throw new HttpException('Error fetching weather data', HttpStatus.BAD_REQUEST);
    }
  }
  
  
}
