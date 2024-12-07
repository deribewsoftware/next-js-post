"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center w-full max-w-md mx-auto mt-10">
      <div
        className={`flex items-center w-full px-4 py-2 bg-white dark:bg-gray-800/20 rounded-full border transition-all duration-300 ${
          isFocused ? "border-emerald-500 " : "border-gray-300   dark:border-gray-800"
        } `}
      >
        <IoIosSearch 
          className={`text-xl transition-colors duration-300 ${
            isFocused ? "text-gray-800 dark:text-gray-300" : " text-gray-600 dark:text-gray-500"
          }`}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full ml-3 text-sm focus:outline-none bg-transparent"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
