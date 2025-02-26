import React from "react";
import Button from "./Button";

const Buttons = [
  "All",
  "Live",
  "Yo Yo Honey Singh",
  "Gaming",
  "Songs",
  "Soccer",
  "Cricekt",
  "Cooking",
  "Singing",
  "Eating",
  "Virat",
  "Sidhu Moose Wala",
  "Ashutosh Sahu Vlogs",
  "Saurav Joshi Vlogs",
  "Free Fire",
  "PUBG",
  "Football",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      {Buttons.map((item) => (
        <Button name={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonList;
