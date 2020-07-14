import React, { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import sunny from "../images/sun.png";
import { FiWind, FiCloudRain, FiCloudDrizzle, FiCloud } from "react-icons/fi";

const WeatherDisplay = () => {
  const APP_ID = "94b3998b6b7b9d9dbf522ea017c753a2";
  const [query, setQuery] = useContext(WeatherContext);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);

  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    description: null,
  });

  const getWeatherData = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=94b3998b6b7b9d9dbf522ea017c753a2&units=metric`
    );
    const data = await response.json();
    console.log(data);
    setTemp(data.main.temp);
    setCity(data.name);
    setCountry(data.sys.country);
    setDescription(data.weather[0].description);
    setWind(data.wind.speed);
    setHumidity(data.main.humidity);
    setPressure(data.main.pressure);

    // console.log(weather);
  };
  useEffect(() => {
    getWeatherData();

    // eslint-disable-next-line
  }, [query]);
  return (
    <div className="text-center text-white">
      <div className=" mt-10 shadow p-5 neu-shadow bg-white-transparent border-2 border-white rounded">
        {/* <span className="inline-block uppercase underlin mb-5 text-4xl">
          04:20 PM
        </span> */}
        <h2 className="text-2xl font-semibold">
          {city}, {country}
        </h2>
        <h1 className="text-6xl font-bold text-shadow flex items-center justify-center mt-3">
          {/* <FiCloud className="mr-2"></FiCloud> */}
          <img src={sunny} alt="" className="w-24 mr-3" />
          <span>{temp} &deg;c</span>
        </h1>
        <div className="mt-2 text-3xl underline">
          <p className="capitalize">{description}</p>
        </div>
        <div className="flex sm:px-5 mt-8">
          <div className="w-1/3 text-center">
            <div className="">
              {/* <FiWind className="ml-2 text-xl inline-block text-blue-500"></FiWind> */}
              <p className="text-xl font-bold text-shado uppercase text-blue-500">
                Wind
              </p>
            </div>
            <p className="font-semibold text-xl">{wind} km/h</p>
          </div>
          <div className="w-1/3 text-center">
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold text-shado uppercase text-blue-500">
                Humidity
              </p>
              {/* <FiCloudDrizzle className="ml-2 text-3xl inline-block text-blue-500"></FiCloudDrizzle> */}
            </div>
            <p className="font-semibold text-xl">{humidity}%</p>
          </div>
          <div className="w-1/3 text-center">
            <div className="">
              {/* <FiWind className="ml-2 text-xl inline-block text-blue-500"></FiWind> */}
              <p className="text-xl font-bold text-shado uppercase text-blue-500">
                Pressure
              </p>
            </div>

            <p className="font-semibold text-xl">{pressure} hPa/mb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
