import React, { useState } from "react";
import { Message } from "./Message";

export function MessageApp() {
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

//
