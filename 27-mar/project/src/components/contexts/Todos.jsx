import React, { useContext } from "react";
import { CounterContext } from "./CounterAppWithContext";

export default function Todos() {
  const { todos = [], addTodo, removeTodo } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => addTodo(crypto.randomUUID())}>Add </button>
      <br />
      {todos.map((todo, indx) => (
        <p onClick={() => removeTodo(indx)}>{todo}</p>
      ))}
    </div>
  );
}
