import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('latlon/:lat/:lon')
  async getWeatherByLatLon(@Param('lat') lat: string, @Param('lon') lon: string) {
    return this.weatherService.getWeatherByLatLon(lat, lon);
  }
  
}
