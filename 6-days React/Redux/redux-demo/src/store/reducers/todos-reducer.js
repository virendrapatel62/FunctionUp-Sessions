import { todosActions } from "../actions";

const init = ["Learn JS", "Learn React"];

export function todosReducer(todos = init, action) {
  console.log("TODOS Reducer");
  console.log({
    action,
  });
  const { type, payload } = action;

  switch (type) {
    case todosActions.addTodo: {
      return [payload?.trim(), ...todos];
    }
    default: {
      return todos;
    }
  }
}
