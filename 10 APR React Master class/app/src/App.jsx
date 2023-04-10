import React, { useState } from "react";
import { Message } from "./components/Message";

export function App1() {
  // let [successMessage, setSuccessMessage] = useState("created Successfully");
  // let [infoMessage, setInfoMessage] = useState("created Successfully");
  // let [errorMessage, setErrorMessage] = useState("created Successfully");

  const [messages, setMessages] = useState({
    error: "Eroror Message",
    success: "Success Messae",
    info: "Info Message",
  });

  console.log(messages);

  function changeMessage() {
    console.log("Click Event handling..");
    setSuccessMessage("Message Changed..");
  }
  function clearMessage() {
    // const newMessage = {
    //   ...messages,
    // };
    messages.success = "";
    setMessages({
      ...messages,
    });
  }

  return (
    <div>
      <button onClick={changeMessage}>Change Message</button>

      {messages.success && (
        <Message
          type="success"
          message={messages.success}
          close={clearMessage}
        />
      )}

      {messages.error && (
        <Message
          type="error"
          close={() => setMessages({ ...messages, error: "" })}
          message={messages.error}
        />
      )}

      {messages.info && (
        <Message close={() => setMessages({ ...messages, info: "" })}>
          {messages.info}
        </Message>
      )}
    </div>
  );
}

// export { App };

export default function App() {
  const [randomNumbers, setRandomNumbers] = useState([1, 2, 4, 6]);

  const addOnMoreNumber = () => {
    setRandomNumbers([Math.round(Math.random() * 100), ...randomNumbers]);
  };

  const removeFirst = () => {
    randomNumbers.shift();
    setRandomNumbers([...randomNumbers]);
  };
  const removeLast = () => {
    randomNumbers.pop();
    setRandomNumbers([...randomNumbers]);
  };

  return (
    <div>
      <button onClick={addOnMoreNumber}>Add One More</button>
      <hr />
      <button onClick={removeFirst}>Remove First</button>
      <button onClick={removeLast}>Remove Last</button>
      <ul>
        {randomNumbers.map((number) => (
          <li className="">{number}</li>
        ))}
      </ul>
    </div>
  );
}

//
