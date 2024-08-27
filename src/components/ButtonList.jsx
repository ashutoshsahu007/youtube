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
];

const ButtonList = () => {
  return (
    <div className="flex">
      {List.map((item) => (
        <Button name={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonList;
