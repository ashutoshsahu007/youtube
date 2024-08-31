import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg sticky items-center">
      <div className="flex  col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 m-2 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBRP_sFEuZ6VCwq601at0KzWioZkD__eRfw&s"
          alt="image not found"
        />
        <a href="/">
          <img
            className="h-12 mx-10"
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
            alt="image not found"
          />
        </a>
      </div>
      <div className="col-span-10 px-6">
        <div>
          <input
            type="text"
            className="py-2 px-2 w-1/2 border border-gray-400 p-2 rounded-l-full"
            placeholder="Enter Your Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[440px] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
          alt="image not found"
        />

        <div className="font-bold mx-3 items-center p-1">Ashutosh Sahu</div>
      </div>
    </div>
  );
};

export default Head;
