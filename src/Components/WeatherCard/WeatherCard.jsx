import BackgroundChanger from "../BackgroundChanger/BackgroundChanger";

const WeatherCard = ({ data }) => {
  const { location, current } = data;

  return (
    <div className="mx-auto  p-5 rounded-lg backdrop-blur-lg shadow-lg">
      <BackgroundChanger condition={current.condition.text.toLowerCase()} />
      <div className="flex lg:flex-row flex-col items-center mx-auto gap-4">
        <div className="flex flex-row items-center">
      <img
        src={current.condition.icon}
        alt={current.condition.text}
        className="sm:w-32 sm:h-32"
      />
      <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">{current.temp_c}°C</p>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col justify-start gap-2 lg:ml-4">
  <p className="text-lg sm:text-xl lg:text-2xl">
    Humidity: <span className="text-red-600 font-bold">{current.humidity}%</span>
  </p>
  <p className="text-lg sm:text-xl lg:text-2xl">
    Wind: <span className="text-red-600 font-bold">{current.wind_kph} km/h</span>
  </p>
</div>
      </div>
      <p className="lg:text-3xl " >Updated: <span className=" text-purple-400 md:font-bold">{current.last_updated}</span></p>
    </div>
  );
};

export default WeatherCard;
