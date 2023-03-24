import React, { useState } from "react";
import ABCD from "./ABCD";
import Forms from "./Forms";
import { Message } from "./Message";
import UserCard from "./UserCard";
import classes from "./UserCard.module.css";
import UseStateExample from "./UseStateExample";

function App() {
  let [showSuccessMessage, setShowSuccessMessage] = useState(true); // [true, function () {}]

  // const showSuccessMessage = stateValues[0];
  // const setShowSuccessMessage = stateValues[1];

  const handleClick = () => {
    if (showSuccessMessage) {
      setShowSuccessMessage(false);
    } else {
      setShowSuccessMessage(true);
    }
  };

  return (
    <div>
      {/* <Message message="Created User" type="success" />
      <Message message="Could not create User" type="error" /> */}

      {/* <button onClick={handleClick} className="btn btn-success">
        Toggle Message
      </button>

      {showSuccessMessage && <Message message="Created User" success />}

      <Message message="Created User" />
      <Message message="Could not create User" error /> */}

      {/* <ABCD /> */}

      {/* <div className={classes.users}>
        {students.map((item, index) => (
          <UserCard name={item.name} age={item.age} />
        ))}
      </div> */}

      {/* <UseStateExample /> */}

      <Forms />
    </div>
  );
}

export default App;

const students = [
  {
    name: "Virendra",
    age: 24,
  },
  {
    name: "MOhan",
    age: 25,
  },
  {
    name: "Yash",
    age: 23,
  },
];
