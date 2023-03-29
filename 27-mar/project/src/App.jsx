import { useCallback, useEffect, useState } from "react";
import CounterAppWithContext from "./components/contexts/CounterAppWithContext";
import { EffectExample } from "./components/UseEffectExample";
import { ReducerExaple } from "./components/UseReducerExample";
import { RefExample } from "./components/UseRefExample";
import { StateExample } from "./components/UseStateExample";
function App() {
  const [showEffectExample, setShowEffectExample] = useState(true);

  function toggleEffectExample() {
    setShowEffectExample(!showEffectExample);
  }
  return (
    <div>
      {/* <button onClick={toggleEffectExample}>Toggle Effect</button> */}

      {/* <StateExample /> */}
      {/* {showEffectExample && <EffectExample />} */}

      {/* <RefExample /> */}
      {/* <ReducerExaple /> */}

      <CounterAppWithContext />
    </div>
  );
}

export default App;
