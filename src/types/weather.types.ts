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
  ClearSky = 0,
  MainlyClear = 1,
  PartlyCloudy = 2,
  Overcast = 3,
  Fog = 45,
  DepositingRimeFog = 48,
  LightDrizzle = 51,
  ModerateDrizzle = 53,
  DenseDrizzle = 55,
  LightFreezingDrizzle = 56,
  DenseFreezingDrizzle = 57,
  SlightRain = 61,
  ModerateRain = 63,
  HeavyRain = 65,
  LightFreezingRain = 66,
  HeavyFreezingRain = 67,
  SlightSnowFall = 71,
  ModerateSnowFall = 73,
  HeavySnowFall = 75,
  SnowGrains = 77,
  SlightRainShowers = 80,
  ModerateRainShowers = 81,
  ViolentRainShowers = 82,
  SlightSnowShowers = 85,
  HeavySnowShowers = 86,
  ThunderstormSlightOrModerate = 95,
  ThunderstormWithSlightHail = 96,
  ThunderstormWithHeavyHail = 99,
}

export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: Hourly
};

export type CountryCoords = { latitude: number; longitude: number };
