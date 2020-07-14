import React, { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import sunny from "../images/sun.png";
/* eslint-disable */
const WeatherDisplay = () => {
  const APP_ID = "94b3998b6b7b9d9dbf522ea017c753a2";
  const [query, setQuery] = useContext(WeatherContext);
  const [temp, setTemp] = useState(27);
  const [city, setCity] = useState("Banjul");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("Thunder Clouds");
  const [wind, setWind] = useState(1.9);
  const [humidity, setHumidity] = useState(74);
  const [pressure, setPressure] = useState(1009);

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
  };
  useEffect(() => {
    getWeatherData();

    // eslint-disable-next-line
  }, [query]);
  return (
    <div className="text-center text-white">
      <div className=" mt-10 shadow p-5 neu-shadow bg-white-transparent border-2 border-white rounded">
        <h2 className="text-lg sm:text-2xl font-semibold">
          {city}, {country}
        </h2>
        <h1 className="text-6xl font-bold text-shadow flex items-center justify-center mt-3">
          <img src={sunny} alt="" className="w-24 mr-3" />
          <span>{temp} &deg;c</span>
        </h1>
        <div className="mt-2 text-3xl underline">
          <p className="capitalize">{description}</p>
        </div>
        <div className="flex sm:px-5 justify-between mt-8">
          <div className="text-center">
            <div className="">
              <p className="sm:text-xl font-bold text-shado uppercase text-blue-500">
                Wind
              </p>
            </div>
            <p className="font-semibold sm:text-xl">{wind} km/h</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <p className="sm:text-xl font-bold text-shado uppercase text-blue-500">
                Humidity
              </p>
            </div>
            <p className="font-semibold sm:text-xl">{humidity}%</p>
          </div>
          <div className="text-center">
            <div className="">
              <p className="sm:text-xl font-bold text-shado uppercase text-blue-500">
                Pressure
              </p>
            </div>

            <p className="font-semibold sm:text-xl">{pressure} hPa/mb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
