import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]);
  // const prime = findNthPrime(text);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-88 border border-black" +
        (isDarkTheme && " text-white bg-black")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-400"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
