const ForecastCard = ({ data }) => {
    return (
      <div className="flex md:flex-col flex-row items-center justify-center lg:w-full  p-4  lg:m-4 m-2  backdrop:blur-2xl rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">{new Date(data.date).toLocaleDateString("en-US", { weekday: "short" })}</h3>
        <img src={data.day.condition.icon} alt={data.day.condition.text} />
        <p className="flex items-center gap-4">
          <span className="font-bold">{data.day.maxtemp_c}°C</span>
          <span className="font-bold">{data.day.mintemp_c}°C</span>
        </p>
      </div>
    );
  };
  
  export default ForecastCard;