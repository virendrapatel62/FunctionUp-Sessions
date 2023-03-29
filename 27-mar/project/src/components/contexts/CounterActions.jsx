import { useContext } from "react";
import { CounterContext } from "./CounterAppWithContext";

export function CounterActions() {
  const { count, dec, inc, addTodo } = useContext(CounterContext);
  return (
    <div>
      <p>In Actions Component : {count}</p>
      <button onClick={inc}>+</button>
      <span>&nbsp;</span>
      <button onClick={() => addTodo(crypto.randomUUID())}>Add </button>
      <span>&nbsp;</span>
      <button onClick={dec}>-</button>
    </div>
  );
}
