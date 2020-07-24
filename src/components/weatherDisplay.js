import React, { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import sunny from "../images/sun.png";
/* eslint-disable */
const WeatherDisplay = () => {
  const APP_ID = "94b3998b6b7b9d9dbf522ea017c753a2";
  const [query, setQuery] = useContext(WeatherContext);
  const [temp, setTemp] = useState("-");
  const [city, setCity] = useState("Banjul");
  const [country, setCountry] = useState("-");
  const [description, setDescription] = useState("-");
  const [wind, setWind] = useState("-");
  const [humidity, setHumidity] = useState("-");
  const [pressure, setPressure] = useState("-");
  const [icons, setIcons] = useState("");

  const getWeatherData = async () => {
    const KEY = "176dfa7337084e96fd10fca366538257";
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${KEY}&query=${query}`
    );
    const data = await response.json();
    // console.log(data);
    try {
      setTemp(data.current.feelslike);
      setCity(data.location.name);
      setCountry(data.location.country);
      setDescription(data.current.weather_descriptions);
      setWind(data.current.wind_speed);
      setHumidity(data.current.humidity);
      setPressure(data.current.pressure);
      setIcons(data.current.weather_icons);
    } catch (error) {
      alert(`'${query}' is not a valid city name`);
    }
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
        <h1 className="text-6xl font-bold flex items-center justify-center mt-3">
          <img src={icons} alt="" className="w-24 mr-3" />
          <span>{temp} &deg;c</span>
        </h1>
        <div className="mt-2 text-3xl underline">
          <p className="capitalize">{description}</p>
        </div>
        <div className="flex sm:px-5 justify-between mt-8">
          <div className="text-center">
            <div className="">
              <p className="sm:text-xl font-bold uppercase text-blue-500">
                Wind
              </p>
            </div>
            <p className="font-semibold sm:text-xl">{wind} km/h</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <p className="sm:text-xl font-bold uppercase text-blue-500">
                Humidity
              </p>
            </div>
            <p className="font-semibold sm:text-xl">{humidity}%</p>
          </div>
          <div className="text-center">
            <div className="">
              <p className="sm:text-xl font-bold uppercase text-blue-500">
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
