import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./reducers/counter-reducer";
import { todoSlice } from "./reducers/todosSlice";
import { usersSlice } from "./reducers/usersSlice";

export const store = configureStore({
  // counter: counterReducer,
  reducer: {
    todos: todoSlice.reducer,
    users: usersSlice.reducer,
  },
});
