import React, { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { WeatherContext } from "../contexts/WeatherContext";

const SearchBar = () => {
  // eslint-disable-next-line
  const [query, setQuery] = useContext(WeatherContext);
  const search = useRef();
  const getSearch = () => {
    setQuery(search.current.value);
    // console.log(query);
  };
  return (
    <form
      className="text-center relative text-lg"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className="w-full p-3 bg-transparent placeholder-gray-300 text-white border-b-2 focus:border-white border-gray-300 transition-all duration-300 "
        placeholder="Search a city or country"
        ref={search}
      />
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-300"
        onClick={getSearch}
      >
        <FaSearch></FaSearch>
      </button>
    </form>
  );
};

export default SearchBar;
