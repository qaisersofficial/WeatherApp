import { API_KEY } from "./contants";
import { cacheWeatherData, getCachedWeatherData } from "./chache";
const FORECAST_URL = "https://api.weatherapi.com/v1/forecast.json";

export async function fetchWeatherData(city) {
  const url = `${FORECAST_URL}?key=${API_KEY}&q=${city}&days=3`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`City not found: ${response.status}`);
  }

  const data = await response.json();
  cacheWeatherData(city, data);
  return data;
}
export { getCachedWeatherData };