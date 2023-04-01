import React, { useCallback, useEffect, useMemo, useState } from "react";
import UseEffectExample from "./UseEffectExample";

const factorial = (number) => {
  console.log("Calculating Facttorial");
  if (number < 2) return 1;
  return number * factorial(number - 1);
};

export default function Memoization() {
  const [students, setStudens] = useState([
    {
      name: "Virendra",
      id: crypto.randomUUID(),
    },
    {
      name: "Harsh",
      id: crypto.randomUUID(),
    },
  ]);

  const [count, setCount] = useState(0);

  const fact = useMemo(() => {
    return factorial(count);
  }, [count]);

  console.log("Render Memoization");

  const onType = (event) => {
    if (event.key == "Enter") {
      setStudens([
        ...students,
        {
          id: Date.now(),
          name: event.target.value,
        },
      ]);
      event.target.value = "";
    }
  };

  const handleDelete = useCallback((id) => {
    setStudens((students) =>
      students.filter((item, index) => {
        return item.id !== id;
      })
    );
  }, []);

  // const handleDelete = useMemo(() => {
  //   return (id) => {
  //     setStudens((students) =>
  //       students.filter((item, index) => {
  //         return item.id !== id;
  //       })
  //     );
  //   };
  // }, []);

  return (
    <div className="border">
      <Heading />
      <hr />
      <p>Counter : {count}</p>
      <p>Factorial : {fact}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
      <input type="text" onKeyUp={onType} />
      <ul>
        {students.map((student) => (
          <Student
            deleteStudent={handleDelete}
            key={student.id}
            student={student}
          />
        ))}
      </ul>
    </div>
  );
}

const Heading = React.memo(() => {
  console.log("Render Heading");
  return <h1>MEMO Example</h1>;
});

const Student = React.memo((props) => {
  console.log("Render Student");

  const student = props.student;

  return (
    <li className="student-list-item">
      {student.name} - {student.id}{" "}
      <span onClick={() => props.deleteStudent(student.id)}>❌</span>
    </li>
  );
});
