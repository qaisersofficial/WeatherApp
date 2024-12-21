import './App.css'
import Loader from './Components/Loader/Loader'
import { useState, useEffect } from "react";
import { fetchWeatherData, getCachedWeatherData } from "./utils/api.js";
import { getGeolocationWeather } from "./utils/geolocation.js";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import WeatherCard from "./Components/WeatherCard/WeatherCard.jsx";
import ForecastCard from "./Components/ForcastCard/ForecastCard.jsx";
import Login from "./Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import Logout from "./Components/Auth/Logout.jsx";
import Congratulations from './Components/Auth/Congratulations.jsx';
import Favorites from "./Components/Favourite/favourite";
import ErrorMessage from './Components/ErrorMessage/ErrorMessage.jsx';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const fetchWeather = async (city) => {
    setError("");
    setLoading(true);

    const cachedData = getCachedWeatherData(city);
    if (cachedData) {
      setWeatherData(cachedData);
      setLoading(false);
      return;
    }

    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowSignup(false);
  };
  const addFavorite = () => {
    if (!favorites.some((fav) => fav.location.name === weatherData.location.name)) {
      setFavorites([...favorites, weatherData]);
    }
  };
  const removeFavorite = (locationName) => {
    setFavorites(favorites.filter((fav) => fav.location.name !== locationName));
  };

  useEffect(() => {
    getGeolocationWeather(setWeatherData, setError, setLoading);
  }, []);
  if (!isLoggedIn && !showSignup) {
    return <>
    <h1 className="max-[425px]:text-xl text-3xl  bg-black text-white text-center font-medium hover:text-black hover:bg-white hover:cursor-pointer"> Welcome To The Weather App</h1>
    <Login setIsLoggedIn={setIsLoggedIn} setShowSignup={setShowSignup} />
    </>
  }

  if (showSignup) {
    return <>
    <h1 className="max-[425px]:text-xl text-3xl  bg-black text-white text-center font-medium hover:text-black hover:bg-white hover:cursor-pointer"> Welcome To The Weather App</h1>
     <Signup setShowSignup={setShowSignup} setShowPopup={setShowPopup} />;
    </>
  }

  return (
    <div className="mt-[3%] lg:w-3/4 w-11/12 flex flex-col rounded-lg mx-auto lg:px-16 backdrop-blur-lg  shadow-lg">
      <Logout onLogout={handleLogout} />
      <h1 className=" text-xl  text-left lg:text-5xl  mt-5 mx-6 ">
      Results for{' '} {weatherData && <span className='font-bold'>{weatherData.location.name}</span>}
      </h1>
      <SearchBar onSearch={fetchWeather} />
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      {weatherData && (
        <>
          <WeatherCard data={weatherData} />
          <button
            className=" text-red-500 hover:text-red-700 mx-auto"
            onClick={addFavorite}
            title="Add this location to favorites"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>
          <div className="flex md:flex-row flex-col mx-auto justify-center w-full "> 
            {weatherData.forecast.forecastday.map((forecast) => (
              <ForecastCard key={forecast.date} data={forecast} />
            ))}
          </div>
        </>
      )}
      <Favorites favorites={favorites} onRemoveFavorite={removeFavorite} />
      {showPopup && (
        <Congratulations setShowPopup={setShowPopup} />
      )}
    </div>
  );
}

export default App