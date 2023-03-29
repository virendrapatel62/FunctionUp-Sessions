import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../../store/actions";
import { todoSlice } from "../../store/reducers/todosSlice";

export function TodoForm() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const addTodo = (event) => {
    const value = inputRef.current.value;
    if (event.keyCode == 13 && value.trim()) {
      dispatch(todoSlice.actions.addTodo(value));
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" onKeyUp={addTodo} />
    </div>
  );
}
