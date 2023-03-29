import { counterActions } from "../actions";

const init = 0;

export function counterReducer(value = init, action) {
  console.log("Counter Reducer");
  console.log({
    action,
  });
  const { type } = action;

  switch (type) {
    case counterActions.inc: {
      return value + 1;
    }
    case counterActions.reset: {
      return 0;
    }
    case counterActions.dec: {
      const updatedValue = value - 1;
      if (updatedValue < 0) {
        return value;
      }
      return updatedValue;
    }
    default: {
      return value;
    }
  }
}
