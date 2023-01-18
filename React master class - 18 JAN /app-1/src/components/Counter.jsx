import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("component Monted");
    setTimeout(() => {
      setCounter(10);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("calling api to save Counter in DB");
    console.log("Counter changed ,,", counter);
  }, [counter]);

  const counterChanger = (number) => {
    setCounter(counter + number);
  };

  return (
    <div>
      <p>Counter App : </p>
      <button onClick={() => counterChanger(-1)}>-</button>
      {counter}
      <button onClick={() => counterChanger(+1)}>+</button>

      <button onClick={() => counterChanger(+2)}>+2</button>
      <button onClick={() => counterChanger(+3)}>+3</button>
      <button onClick={() => counterChanger(+4)}>+4</button>
    </div>
  );
};
