export type Hourly = {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  weather_code: number[];
}

export type HourlyUnits = {
  time: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  weather_code: string;
}

export enum WeatherCondition {
  'Clear Sky' = 0,
  'Mainly Clear' = 1,
  'Partly Cloudy' = 2,
  Overcast = 3,
  Fog = 45,
  'Depositing Rime Fog' = 48,
  'Light Drizzle' = 51,
  'Moderate Drizzle' = 53,
  'Dense Drizzle' = 55,
  'Light Freezing Drizzle' = 56,
  'Dense Freezing Drizzle' = 57,
  'Slight Rain' = 61,
  'Moderate Rain' = 63,
  'Heavy Rain' = 65,
  'Light Freezing Rain' = 66,
  'Heavy Freezing Rain' = 67,
  'Slight Snowfall' = 71,
  'Moderate Snowfall' = 73,
  'Heavy Snowfall' = 75,
  'Snow Grains' = 77,
  'Slight Rain Showers' = 80,
  'Moderate Rain Showers' = 81,
  'Violent Rain Showers' = 82,
  'Slight Snow Showers' = 85,
  'Heavy Snow Showers' = 86,
  'Thunderstorm Slight or Moderate'= 95,
  'Thunderstorm with Slight Hail' = 96,
  'Thunderstorm with Heavy Hail' = 99,
}

export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms?: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: Hourly
};

export type WeatherResponse = {
  data: WeatherData;
  status: number;
  statusText: string;
};

export type CountryCoords = { latitude: number; longitude: number };
