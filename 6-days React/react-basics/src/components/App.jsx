import React from "react";
import ABCD from "./ABCD";
import UserCard from "./UserCard";
import classes from "./UserCard.module.css";

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

function App() {
  return (
    <div>
      <ABCD />

      <div className={classes.users}>
        {students.map((item, index) => (
          <UserCard name={item.name} age={item.age} />
        ))}
      </div>
    </div>
  );
}

export default App;
