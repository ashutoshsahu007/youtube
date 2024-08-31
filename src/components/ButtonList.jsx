import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Soccer",
  "Cricekt",
  "Cooking",
  "Valentines",
  "Cookies",
  "Singing",
  "eating",
  "virat",
  "sidhu",
  "raha",
  "ashutosh",
  "sahu",
];

const ButtonList = () => {
  return (
    <div className="w-[1090px] flex overflow-x-scroll  ">
      {List.map((item) => (
        <Button name={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonList;
