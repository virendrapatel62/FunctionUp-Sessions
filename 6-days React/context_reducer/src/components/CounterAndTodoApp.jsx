import { useReducer, useRef } from "react";

const counterReducer = (state, { type, payload }) => {
  console.log(type, payload);
  if (type == "INC") {
    return {
      ...state,
      count: state.count + payload,
    };
  }
  if (type == "ADD_TODO") {
    return {
      ...state,
      todos: state.todos.concat([payload]),
    };
  }
  if (type == "DELETE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((i, index) => index !== payload.index),
    };
  }
  return state;
};

function CounterAndTodo() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    todos: ["Learn", "Js"],
  });

  const inputRef = useRef();
  const { todos, count } = state;

  const addTodo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: inputRef.current.value,
    });
    inputRef.current.value = "";
  };

  console.log(state);
  return (
    <div>
      <h1>{count}</h1>
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          onClick={() => {
            dispatch({
              type: "INC",
              payload: i,
            });
          }}
        >
          +{i}
        </button>
      ))}
      <hr />
      <input ref={inputRef} type="text" name="" placeholder="TODO" id="" />{" "}
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo}{" "}
            <span
              onClick={() => {
                dispatch({
                  type: "DELETE_TODO",
                  payload: {
                    index: index,
                  },
                });
              }}
            >
              ❌
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CounterAndTodo;
