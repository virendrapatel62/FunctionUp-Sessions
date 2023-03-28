import React from "react";
import { useReducer } from "react";
import {
  actionTypes,
  calculatorReducer,
  getIntialState,
} from "../reducers/calculatorReducer";

export default function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, getIntialState());
  const { number1, number2 } = state.inputs;

  const onInputChange = (event, name) => {
    console.log(`${name} span action`);
    const types = {
      number1: actionTypes.NUMBER_ONE_CHANGED,
      number2: actionTypes.NUMBER_TWO_CHANGED,
    };
    let newValue = state.inputs[name];
    console.log({ name });
    let actionType = types[name];
    event.deltaY < 0 ? newValue++ : newValue--;

    console.log(`${onInputChange.name} : going to dispatch [${actionType}]`);

    console.log({
      type: actionType,
      payload: newValue,
    });
    dispatch({
      type: actionType,
      payload: newValue,
    });
  };

  const calculate = (actionType) => {
    dispatch({
      type: actionType,
    });
  };

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
      <button onClick={() => calculate(actionTypes.sum)}>Sum</button>
      <button onClick={() => calculate(actionTypes.mul)}>Multiply</button>
      <button onClick={() => calculate(actionTypes.div)}>Divide</button>
      <button onClick={() => calculate(actionTypes.sub)}>Substract</button>

      <hr />
      <p>
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </p>
    </div>
  );
}
