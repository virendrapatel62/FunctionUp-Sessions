import { useCounter } from "./CounterAppWithContext";

export function CounterAction() {
  const { value, setValue } = useCounter();

  const clickHandle = (_value) => {
    setValue(value + _value);
  };

  return (
    <div>
      <button onClick={() => clickHandle(+1)}>+</button>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <button onClick={() => clickHandle(-1)}>-</button>
      <p>In Action Component : {value}</p>
    </div>
  );
}
