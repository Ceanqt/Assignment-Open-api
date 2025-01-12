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
      return response.data;
    } catch (error) {
      throw new HttpException('Error fetching weather data', HttpStatus.BAD_REQUEST);
    }
  }
  
}
