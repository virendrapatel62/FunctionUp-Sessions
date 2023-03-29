import { useContext } from "react";
import { CounterContext } from "./CounterAppWithContext";
import Todos from "./Todos";

export function CounterDisplay() {
  const value = useContext(CounterContext);
  return (
    <div>
      <h1>Current Value : {value.count}</h1>;
      <Todos />
    </div>
  );
}
