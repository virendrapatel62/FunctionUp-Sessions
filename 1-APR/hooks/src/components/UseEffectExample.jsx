import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [students, setStudens] = useState(["Virendra", "Harsh", "Sandeep"]);

  useEffect(() => {
    console.log("ExampleComp Mounted");
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(students));
  }, [students]);

  const onType = (event) => {
    if (event.key == "Enter") {
      setStudens([...students, event.target.value]);
      event.target.value = "";
    }
  };

  const handleDelete = (_index) => {
    setStudens(
      students.filter((item, index) => {
        return index !== _index;
      })
    );
  };

  return (
    <div>
      <h1>Use Effect Example</h1>
      <hr />

      <input type="text" onKeyUp={onType} />

      <ul>
        {students.map((student, index) => (
          <Student
            deleteStudent={() => handleDelete(index)}
            key={student}
            name={student}
          />
        ))}
      </ul>
    </div>
  );
}
function Student(props) {
  useEffect(() => {
    console.log("Render Student", props.name);

    return () => {
      console.log("Student Comp Dying..", props.name);
    };
  }, []);

  return (
    <li className="student-list-item">
      {props.name} <span onClick={props.deleteStudent}>❌</span>
    </li>
  );
}
