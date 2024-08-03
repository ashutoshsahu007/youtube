import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBRP_sFEuZ6VCwq601at0KzWioZkD__eRfw&s"
          alt="image not found"
        />
        <img
          className="h-10 mx-3"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          alt="image not found"
        />
      </div>
      <div className="col-span-10 px-10  ">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          placeholder="Enter Your Name"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
          alt="image not found"
        />
      </div>
    </div>
  );
};

export default Head;
