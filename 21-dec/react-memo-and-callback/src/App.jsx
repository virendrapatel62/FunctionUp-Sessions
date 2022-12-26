import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Fragment, useMemo, useState } from "react";
import { useCallback } from "react";
function getFactorial(number) {
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    console.log("Calculating factorial ", i);
    factorial = factorial * i;
  }
  return factorial;
}

function _Factorial({ number, onChange, factorial }) {
  console.log(Factorial.name + " is rendring");
  return (
    <Fragment>
      <input type="number" onChange={onChange} value={number} />
      <h1>Factorial : {factorial}</h1>
    </Fragment>
  );
}

// const Factorial = _Factorial;
const Factorial = React.memo(_Factorial);

function App() {
  const [number, setNumber] = useState(3);
  const [counter, setCounter] = useState(1);
  const factorial = useMemo(() => {
    return getFactorial(number);
  }, [number]);

  // const factorial = getFactorial(number);

  // const handleChange = useCallback((event) => {
  //   setNumber(event.target.value);
  // }, []);

  // const handleChange = (event) => {
  //   setNumber(event.target.value);
  // };

  const handleChange = useMemo(() => {
    console.log("MEMO FUNCTION ");
    return (event) => {
      setNumber(event.target.value);
    };
  }, []);

  const handleClick = (value) => {
    const newValue = counter + value;

    if (newValue < 0) {
      return;
    }
    setCounter(newValue);
  };

  return (
    <div>
      <Factorial
        onChange={handleChange}
        factorial={factorial}
        number={number}
      ></Factorial>
      <h1 className="counter">
        <span onClick={() => handleClick(-1)}>-</span>
        <span>{counter}</span>
        <span onClick={() => handleClick(1)}>+</span>
      </h1>
    </div>
  );
}

export default App;
