import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../../store/reducers/todosSlice";

export default function TodoList() {
  console.log("Renrending.. Todo Display");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>TODOS</h3>
      <ul>
        {todos.map((todo, index) => (
          <li
            onClick={() => {
              dispatch(todoSlice.actions.removeTodoByIndex(index));
            }}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
