import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState("Banjul");

  return (
    <WeatherContext.Provider value={[query, setQuery]}>
      {children}
    </WeatherContext.Provider>
  );
};
