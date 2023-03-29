import React from "react";
import { useSelector } from "react-redux";

export default function TodoList() {
  console.log("Renrending.. Todo Display");
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h3>TODOS</h3>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
