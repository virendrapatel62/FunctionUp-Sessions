import React from "react";

const store = {
  A: 1,
  B: 1,
  C: 2,
};

const Buttons = () => {
  const buttons = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  return buttons.map((value, index) => (
    <div key={index}>
      <button onClick={null}>{value}</button>
    </div>
  ));
};

export default function Assignment() {
  return (
    <div>
      <Buttons />
    </div>
  );
}
