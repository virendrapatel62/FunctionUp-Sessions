import React, { useEffect, useRef, useState } from "react";

export default function UseRefExample() {
  const [value, setValue] = useState("");

  const valueRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    console.log("rendring component");
  });

  useEffect(() => {
    console.log(divRef.current);
  }, []);

  const readValue = () => {
    console.log(valueRef.current);
  };

  const handleChange = (event) => {
    const value = event.target.value;

    // setValue(value);
    valueRef.current = value;
  };
  return (
    <div>
      <h1>Use Ref</h1>
      <input type="text" onChange={handleChange} />

      <div ref={divRef} className="ex-div">
        This is div
      </div>

      <button onClick={readValue}>CLick to read value</button>
    </div>
  );
}
