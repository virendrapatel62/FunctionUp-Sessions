import React, { Fragment, useContext, useState } from "react";
import { CounterActions } from "./CounterActions";
import { CounterDisplay } from "./CounterDisplay";
import Todos from "./Todos";

export const CounterContext = React.createContext({});

export default function CounterAppWithContext() {
  const [count, setCount] = useState(40);
  const [todos, setTodos] = useState([]);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  function removeTodo(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }
  const value = {
    count: count,
    inc,
    dec,
    todos: todos,
    addTodo,
    removeTodo,
  };
  return (
    <Fragment>
      <CounterContext.Provider value={value}>
        <CounterActions />
        <hr />
        <CounterDisplay />
      </CounterContext.Provider>
    </Fragment>
  );
}
