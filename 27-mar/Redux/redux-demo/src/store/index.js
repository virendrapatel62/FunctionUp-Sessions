import { createStore, combineReducers } from "redux";
import { CounterReducer } from "./reducers/counter-reducers";
import { todosReducer } from "./reducers/todos-reducer";

export const initialState = {
  counter: {
    count: 0,
  },
  todos: [],
};

export const store = createStore(
  combineReducers({
    counter: CounterReducer,
    todos: todosReducer,
  }),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
