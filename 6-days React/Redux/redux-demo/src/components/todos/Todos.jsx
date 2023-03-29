import React from "react";
import { TodoForm } from "./TodoForm";
import TodoList from "./TodoList";

export default function Todos() {
  return (
    <div>
      <h2>Todo App</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}
