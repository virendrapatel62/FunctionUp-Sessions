import { useCallback, useEffect, useState } from "react";

export function StateExample() {
  const [count, setCount] = useState(0);
  // let count = 0;

  useEffect(() => {
    setCount(10);
  }, []);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
    // setCount(count + 1);
  }, []);
  return (
    <div>
      <h1>Use State Example</h1>

      <button onClick={handleClick}>Click me</button>
      <h3>{count}</h3>
    </div>
  );
}
