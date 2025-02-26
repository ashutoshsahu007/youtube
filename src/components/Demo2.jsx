import React, { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  const i = useRef(null);

  useEffect(() => {
    // i.current = setInterval(() => {
    //   console.log("Hello sahu", Math.random());
    // }, 2000);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-100">
      <div>
        <button
          className="bg-green-500 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase X
        </button>
        <h1 className="font-bold text-xl">Let = {x}</h1>
      </div>
      <div>
        <button
          className="bg-green-500 p-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <h1 className="font-bold text-xl">State = {y}</h1>
      </div>
      <div>
        <button
          className="bg-green-500 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increase Ref
        </button>
        <h1 className="font-bold text-xl">ref = {ref.current}</h1>
      </div>
      <button
        className="bg-red-900 m-4 p-4 text-white font-bold text-2xl rounded-lg"
        onClick={() => clearInterval(i.current)}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
