import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Weather from '../api/weather';

export type WeatherData = { id: number; name: string; description: string; updatedAt: string; createdAt: string; schema: any[] };
export type CountryCoords = { latitude: number; longitude: number };

type InitState = {
  data: WeatherData[];
  latitude: number;
  longitude: number;
  loading: boolean;
  error: string;
};

export const getCurrentWeather = createAsyncThunk(
  'worlds/getCurrentWeather',
  async ({ latitude, longitude }: CountryCoords) => {
    const { data } = await Weather.GetCurrentWeather(latitude, longitude);

    return data;
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: [],
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
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
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

export const { setLongitude, setLatitude } = weatherSlice.actions;

export default weatherSlice;
