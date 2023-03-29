const redux = require("redux");

function reducer(state = { count: 0 }, action) {
  console.log(action);
  if (action.type == "INC") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type == "RESET") {
    return {
      ...state,
      count: 0,
    };
  }
  return state;
}

const store = redux.createStore(reducer);

console.log(store.getState());
store.dispatch({
  type: "INC",
});

console.log(store.getState());

store.dispatch({
  type: "RESET",
});

console.log(store.getState());
