import { useEffect, useRef } from "react";
import { useState } from "react";

export function SumCalculatorState() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const buttonRef = useRef();

  console.log("Sum Is rendring..");
  const sum = +number1 + +number2;

  return (
    <div>
      <input
        type="number"
        onChange={(event) => {
          setNumber1(event.target.value);
        }}
      />
      <hr />
      <input
        onChange={(event) => {
          setNumber2(event.target.value);
        }}
        type="number"
      />
      <hr />

      <h1>{sum}</h1>
    </div>
  );
}
