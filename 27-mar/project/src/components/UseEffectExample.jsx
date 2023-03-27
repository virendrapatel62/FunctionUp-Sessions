import { useEffect, useState } from "react";

function ListItem({ value, onRemove }) {
  useEffect(() => {
    console.log("Mounted ", value);

    return () => {
      console.log("UN-Mounted ", value);
    };
  }, []);
  return <li onClick={onRemove}>{value}</li>;
}

export function EffectExample() {
  const [students, setStudents] = useState([]);

  // console.log(document.querySelector("#list"));

  useEffect(() => {
    console.log("On Loaded");

    return () => {
      console.log("Will run on unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Mounted...");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setStudents(users);
      });
  }, []);

  useEffect(() => {
    console.log("Students Changes...");
  }, [students]);

  const handleOnRemove = (index) => {
    students.splice(index, 1);
    setStudents([...students]);
  };
  return (
    <div>
      <h1>Use Effect Example</h1>

      <ul id="list">
        {students.map((student, index) => {
          return (
            <ListItem
              onRemove={() => handleOnRemove(index)}
              value={student.name}
            />
          );
        })}
      </ul>
    </div>
  );
}
