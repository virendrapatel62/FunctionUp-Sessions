import { initialState } from "..";
import { todoActions } from "../actions";

export function todosReducer(state = initialState.todos, action) {
  console.log(action);
  const { type, payload } = action;

  if (type == todoActions.setTodos) {
    return payload;
  }
  return state;
}
