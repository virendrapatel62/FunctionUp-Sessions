import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/actions";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => {
        dispatch({
          type: todoActions.setTodos,
          payload: todos,
        });
      });
  }, []);
  return <pre>{JSON.stringify(todos, null, 4)}</pre>;
}
