import service from './http';
import { WeatherResponse } from '../types/weather.types';

const GetCurrentWeather = async (latitude: number, longitude: number): Promise<WeatherResponse> => service.get(`/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,weather_code`);

export default {
  GetCurrentWeather,
};
