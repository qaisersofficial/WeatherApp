import { fetchWeatherData } from "./api";

export async function getGeolocationWeather(setWeatherData, setError, setLoading) {
  if (!navigator.geolocation) {
    setError("Geolocation is not supported by your browser.");
    return;
  }

  setLoading(true);
  setError("");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const data = await fetchWeatherData(`${latitude},${longitude}`);
        setWeatherData(data);
      } catch (err) {
        setError(err.message || "Failed to fetch weather for your location.");
      } finally {
        setLoading(false);
      }
    },
    (err) => {
      setError("Unable to retrieve your location.");
      setLoading(false);
    }
  );
}