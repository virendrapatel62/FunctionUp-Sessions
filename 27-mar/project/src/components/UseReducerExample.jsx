import { useEffect, useReducer } from "react";
import { ACTION_TYPES, reducer } from "./reducers/sampleReducer";

export function ReducerExaple() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    ids: [],
    users: [],
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        dispatch({
          type: ACTION_TYPES.SET_USERS,
          payload: users,
        });
      });
  }, []);

  const onInc = (by) => {
    dispatch({
      type: ACTION_TYPES.INC,
      payload: by,
    });
  };

  return (
    <div>
      <h1>Use Reducer Example</h1>

      <button onClick={() => onInc(1)}>Click me + 1</button>
      <button onClick={() => onInc(2)}>Click me + 2</button>
      <button onClick={() => onInc(5)}>Click me + 5</button>
      <button onClick={() => onInc(7)}>Click me + 7</button>
      <button
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.PUSH_ID,
          })
        }
      >
        Push One More Id
      </button>

      <h1> {state.count}</h1>

      <ul>
        {state.ids.map((id) => (
          <li>{id}</li>
        ))}
      </ul>
      <ul>
        {state.users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      {/* <button onClick={handleStudentAddressChange}>Change Addre</button> */}
      {/* <button onClick={handleComChange}>Change Addre</button> */}
    </div>
  );
}
