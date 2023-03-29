import React from "react";
import { CounterActions } from "./CounterActions";
import { CounterDisplay } from "./CounterDisplay";

export default function Counter() {
  return (
    <div>
      <h2>Counter App</h2>
      <CounterActions />
      <CounterDisplay />
    </div>
  );
}
