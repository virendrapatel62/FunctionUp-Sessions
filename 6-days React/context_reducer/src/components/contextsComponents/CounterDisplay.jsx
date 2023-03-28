import { useCounter } from "./CounterAppWithContext";

export function CounterDisplay() {
  const { value } = useCounter();
  return <p>In Display Component : {value}</p>;
}
