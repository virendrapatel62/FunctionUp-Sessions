import { createStore, combineReducers, compose } from "redux";
import { counterReducer } from "./reducers/counter-reducer";
import { todosReducer } from "./reducers/todos-reducer";

const combinedReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = createStore(
  combinedReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
