import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { WeatherCondition } from '../../types/weather.types';
import { Dispatch, State } from '../../store';
import { clearError, getCurrentWeather } from '../../reducers/weather';

const WeatherTable = () => {
  const { data, longitude, latitude, error, loading } = useSelector((state: State) => state.weather);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    const loadData = () => {
      dispatch(getCurrentWeather({ latitude, longitude }));
    };

    loadData();

    const intervalId = setInterval(() => loadData(), 1000);

    return () => clearInterval(intervalId);
  }, [latitude, longitude]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const tableBody = () => {
    return (
      <tbody className="bg-white divide-y divide-gray-200">
        {data!.hourly.time.map((time, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{time}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data!.hourly.temperature_2m[index]}</td>
            <td
              className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data!.hourly.relative_humidity_2m[index]}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {WeatherCondition[data!.hourly.weather_code[index]] || "Unknown"}
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  const status = () => {
    if (!data && loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-lg font-semibold text-blue-500 animate-pulse">
            Loading...
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          {error}
        </div>
      );
    }
  };

  return (
    <div className="overflow-x-auto md:overflow-x-visible">
      {status()}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Time
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Temperature (°C)
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Humidity (%)
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Weather Condition
          </th>
        </tr>
        </thead>
        {data && tableBody()}
      </table>
    </div>
  );
};

export default WeatherTable;
