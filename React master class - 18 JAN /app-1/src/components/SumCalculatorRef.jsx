import { useEffect, useRef } from "react";
import { useState } from "react";

export function SumCalculatorRef() {
  const number1Ref = useRef();
  const number2Ref = useRef();
  const buttonRef = useRef();

  console.log("Sum Is rendring..");
  const [sum, setSum] = useState(0);

  const doSum = () => {
    const number1 = number1Ref.current.value;
    const number2 = number2Ref.current.value;
    setSum(+number1 + +number2);
  };
  return (
    <div>
      <input type="number" ref={number1Ref} />
      <hr />
      <input type="number" ref={number2Ref} />
      <hr />
      <button ref={buttonRef} onClick={doSum}>
        Sum It
      </button>

      <h1>{sum}</h1>
    </div>
  );
}
