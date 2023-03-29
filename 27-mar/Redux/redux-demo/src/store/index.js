import { createStore } from "redux";
const initialState = {
  count: 0,
};
function reducer(state = initialState, action) {
  console.log(action);

  const { type, payload } = action;

  if (type === "INC") {
    return { ...state, count: state.count + payload };
  }
  if (type === "DEC") {
    return { ...state, count: state.count - 1 };
  }
  return state;
}
export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
