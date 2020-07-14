import React, { useEffect, useState } from "react";
import SearchBar from "./components/searchBar";
import WeatherDisplay from "./components/weatherDisplay";
import { WeatherProvider } from "./contexts/WeatherContext";
import becheck from "./images/bechek.png";
import gudi from "./images/gudi.png";
import fajarr from "./images/fajarr.png";
import ngon from "./images/ngon.png";
import timis from "./images/timis.png";

const App = () => {
  const [timeOfDay, setTimeOfDay] = useState(null);
  useEffect(() => {
    const date = new Date();
    setInterval(() => {
      if (Number(date.getUTCHours()) >= 5 && Number(date.getUTCHours()) <= 7) {
        setTimeOfDay(fajarr);
        return;
      }
      if (Number(date.getUTCHours()) >= 8 && Number(date.getUTCHours()) <= 15) {
        setTimeOfDay(becheck);
        return;
      }
      if (
        Number(date.getUTCHours()) >= 16 &&
        Number(date.getUTCHours()) <= 18
      ) {
        setTimeOfDay(ngon);
        return;
      }

      if (
        Number(date.getUTCHours()) >= 19 &&
        Number(date.getUTCHours()) <= 20
      ) {
        setTimeOfDay(timis);
        return;
      }

      if (Number(date.getUTCHours()) >= 21 || Number(date.getUTCHours()) <= 4) {
        setTimeOfDay(gudi);
        return;
      }
    }, 1000);
  }, []);
  return (
    <WeatherProvider>
      <div
        className="bg-center bg-cover min-h-screen py-5 relative"
        style={{ backgroundImage: `url(${timeOfDay})` }}
      >
        <div className="max-w-xl mx-auto p-4 relative z-10">
          <SearchBar></SearchBar>
          <WeatherDisplay></WeatherDisplay>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
        <div className="absolute bottom-0 w-full left-0 py-5 text-center opacity-50 text-white">
          <cite>Powered by sambathadev</cite>
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;
