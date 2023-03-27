import { useReducer, useRef } from "react";
import Calculator from "./components/Calculator";

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

function App() {
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

  // return <Calculator />;
}

export default App;

/**

function App() {
  const [results, setResults] = useState({
    sum: "",
    substract: "",
    multiplication: "",
    division: "",
  });

  const [inputs, setInputs] = useState({
    number1: gen(100, 200),
    number2: gen(10, 100),
  });

  const onInputChange = (event, name) => {
    console.log(name);
    if (event.deltaY < 0) {
      setInputs({
        ...inputs,
        [name]: inputs[name] + 1,
      });
    } else {
      setInputs({
        ...inputs,
        [name]: inputs[name] - 1,
      });
    }
  };

  useEffect(() => {
    setResults({
      ...results,
      sum: number1 + number2,
      substract: number1 - number2,
      multiplication: number1 * number2,
      division: number1 / number2,
    });
  }, [inputs]);

  const doSum = () => {
    setResults({
      ...results,
      sum: number1 + number2,
    });
  };
  const doSub = () => {
    setResults({
      ...results,
      substract: number1 - number2,
    });
  };
  const doMul = () => {
    setResults({
      ...results,
      multiplication: number1 * number2,
    });
  };
  const doDiv = () => {
    setResults({
      ...results,
      division: number1 / number2,
    });
  };

  const { number1, number2 } = inputs;

  return (
    <div className="">
      <h1>Reducer & Context</h1>
      <hr />

      <p>
        <span onWheel={(event) => onInputChange(event, "number1")}>
          Number 1 : {number1}
        </span>
        <br />
        <span onWheel={(event) => onInputChange(event, "number2")}>
          Number 2 : {number2}
        </span>
      </p>
      <button onClick={doSum}>Sum</button>
      <button onClick={doMul}>Multiply</button>
      <button onClick={doDiv}>Divide</button>
      <button onClick={doSub}>Substract</button>
      <hr />
      <p>
        <pre>{JSON.stringify(results, null, 4)}</pre>
      </p>
    </div>
  );
}

 */
