import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Weather from '../api/weather';
import { CountryCoords, Hourly, HourlyUnits, WeatherData } from '../types/weather.types';

type InitState = {
  data: null | WeatherData;
  latitude: number;
  longitude: number;
  loading: boolean;
  error: string;
};

export const getCurrentWeather = createAsyncThunk<WeatherData, CountryCoords>(
  'worlds/getCurrentWeather',
  async ({ latitude, longitude }: CountryCoords) => {
    const { data } = await Weather.GetCurrentWeather(latitude, longitude);

    return data;
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    latitude: 49,
    longitude: 32,
    error: '',
    loading: false,
  } as InitState,
  reducers: {
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    clearError: (state) => {
      state.error = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      state.loading = false;

      const currentWeather = { ...state.data } as WeatherData;
      const responseWeather = { ...action.payload } as WeatherData;

      delete currentWeather.generationtime_ms;
      delete responseWeather.generationtime_ms;

      // Check if the data is the same, prevent unnecessary data updates
      const isEqual = JSON.stringify(currentWeather) === JSON.stringify(responseWeather);

      if (!isEqual) {
        state.data = action.payload;
      }
    });
    builder.addCase(getCurrentWeather.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
    builder.addCase(getCurrentWeather.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { setLongitude, setLatitude, clearError } = weatherSlice.actions;

export default weatherSlice;
