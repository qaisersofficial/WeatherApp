const CACHE_EXPIRATION_TIME = 30 * 60 * 1000; // 30 minutes

export function cacheWeatherData(city, data) {
  const cacheData = {
    timestamp: Date.now(),
    data,
  };
  localStorage.setItem(city, JSON.stringify(cacheData));
}

export function getCachedWeatherData(city) {
  const cachedData = localStorage.getItem(city);
  if (!cachedData) return null;

  const { timestamp, data } = JSON.parse(cachedData);
  if (Date.now() - timestamp > CACHE_EXPIRATION_TIME) {
    localStorage.removeItem(city);
    return null;
  }

  return data;
}
