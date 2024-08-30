import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early Return Pattern

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 m-1 sticky">
      <li className="font-bold m-1">
        <Link>Home</Link>
      </li>
      <li className="font-bold m-1">Shorts</li>
      <li className="font-bold m-1">Video</li>
      <li className="font-bold m-1">Live</li>

      <h1 className="font-bold  pt-5 text-xl ">Subscription</h1>

      <li className="font-bold m-1">Music</li>
      <li className="font-bold m-1">Sports</li>
      <li className="font-bold m-1">Gaming</li>
      <li className="font-bold m-1">Movies</li>

      <h1 className="font-bold pt-5 text-xl">Watch Later</h1>

      <li className="font-bold m-1">Music</li>
      <li className="font-bold m-1">Sports</li>
      <li className="font-bold m-1">Gaming</li>
      <li className="font-bold m-1">Movies</li>
    </div>
  );
};

export default Sidebar;
