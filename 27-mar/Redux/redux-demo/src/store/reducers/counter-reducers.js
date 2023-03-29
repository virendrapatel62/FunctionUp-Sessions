import { initialState } from "..";
import { counterActions } from "../actions";

function CounterReducer(state = initialState.counter, action) {
  console.log(action, state);

  const { type, payload } = action;

  if (type === counterActions.inc) {
    return { ...state, count: state.count + payload };
  }
  if (type === counterActions.dec) {
    return { ...state, count: state.count - 1 };
  }
  return state;
}

export { CounterReducer };
