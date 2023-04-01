import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UseEffectExample from "./components/UseEffectExample";
import UseRefExample from "./components/UseRefExample";
import Memoization from "./components/MemoizationExample";

function App() {
  return (
    <div className="App">
      {/* <UseEffectExample /> */}
      {/* <UseRefExample /> */}
      <Memoization />
    </div>
  );
}

export default App;
