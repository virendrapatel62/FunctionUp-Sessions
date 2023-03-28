import React from "react";
import CartApp from "./components/cartApp/CartApp";

export default function App() {
  return <CartApp />;
}

/**
 * 

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
