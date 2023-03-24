import React, { useState } from "react";
import { Message } from "./Message";

export default function UseStateExample() {
  const [number, setNumber] = useState(10);
  const [student, setStudent] = useState({
    name: "Virendra",
    address: {
      city: "",
      state: "",
    },
  });
  const [marks, setMarks] = useState([]);

  const changeNumber = () => {
    setNumber(number + 10);
  };

  const changeArray = () => {
    setMarks([...marks, Math.random()]);
  };

  const changeObject = () => {
    // setStudent({
    //   ...student,
    //   updatedAt: Date.now(),
    // });

    student.updatedAt = Date.now();
    setStudent({
      ...student,
    });
  };
  const changeObjectDeep = () => {
    // student.address.city = "JBP";
    // setStudent({
    //   ...student,
    // });

    student.address = {
      ...student.address,
      city: "JBP",
      state: crypto.randomUUID(),
    };

    setStudent({
      ...student,
    });
  };

  return (
    <div>
      <button onClick={changeNumber}>Change Number</button>
      <button onClick={changeArray}>Change Array</button>
      <button onClick={changeObject}>Change Object</button>
      <button onClick={changeObjectDeep}>Change Object Deep</button>

      <pre className="alert">{JSON.stringify(number, null, 3)}</pre>
      <Message message={student.updatedAt}></Message>
      <Message message={student.name}></Message>
      <pre className="alert">{JSON.stringify(marks, null, 3)}</pre>
    </div>
  );
}
