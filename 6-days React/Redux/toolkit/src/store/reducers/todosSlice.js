import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(todos, { payload, type }) {
      todos.push(payload);
    },
    removeTodoByIndex(todos, { payload }) {
      todos.splice(payload, 1);
    },
  },
});
