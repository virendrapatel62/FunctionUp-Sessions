import "./App.css";
import { useState } from "react";
import Users from "./components/Users";
import MemoizedUsers from "./components/MemoizedUsers";

function App() {
  const [color, setColor] = useState("");

  const handleClick = (color) => {
    setColor(color);
  };

  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <button onClick={() => handleClick("black")}>Black</button>
      <button onClick={() => handleClick("gray")}>Gray</button>
      <div className="App">
        <Users />
        <MemoizedUsers />
      </div>
    </div>
  );
}

export default App;
