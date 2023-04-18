import { useState } from "react";
import "./App.css";

function Child(props) {
  return (
    <div>
      <h1>props.message</h1>
      <button onClick={() => props.setMessage(Math.floor(Math.random() * 100))}>
        Change Message
      </button>
    </div>
  );
}

function App() {
  const [message, setMessage] = useState("Hello");
  return (
    <div className="App">
      <table>
        <tr>
          <td colSpan={2}>P</td>
        </tr>
        <tr>
          <td>
            <Child message={message} setMessage={setMessage} />
          </td>
          <td>
            <Child message={message} setMessage={setMessage} />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
