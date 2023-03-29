import { useSelector } from "react-redux";

export function CounterDisplay() {
  console.log("Renrending.. CounterDisplay");
  const value = useSelector((state) => state.counter);

  console.log(value);
  return <h1>Count : {value} </h1>;
}
