import service from './http';

const GetCurrentWeather = async (latitude: number, longitude: number) => service.get(`/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,weather_code`);

export default {
  GetCurrentWeather,
};
