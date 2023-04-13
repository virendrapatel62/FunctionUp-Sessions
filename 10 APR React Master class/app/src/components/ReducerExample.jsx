import React, { useEffect, useReducer, useState } from "react";

function counterReducer(count, action) {
  //   console.log(action);
  console.log("3");

  const type = action.type;
  if (type === "INC") {
    console.log("4");

    return count + 1;
  }
  if (type === "DEC") {
    return count - 1;
  }

  return count;
}

const studentReducer = (student, action) => {
  const type = action.type;
  const payload = action.payload;

  const getMessage = (name, age) => {
    return `My name is ${name} and age is ${age}`;
  };

  if (type == "NAME_CHANGE") {
    return {
      ...student,
      name: payload,
      message: getMessage(payload, student.age),
    };
  }

  if (type === "AGE_CHANGE") {
    return {
      ...student,
      age: payload,
      message: getMessage(student.name, payload),
    };
  }

  return student;
};

export default function ReducerExample() {
  //   Students State
  const [student, studentDispatch] = useReducer(studentReducer, {
    name: "Virendra",
    age: 24,
  });

  //   const [studentState, setStudentState] = useState({
  //     name: "Virendra",
  //     age: 24,
  //   });

  const [count, dispatch] = useReducer(counterReducer, 10);
  const op = (type) => {
    console.log("2");
    dispatch({
      type: type,
    });
  };
  const inc = () => {
    console.log("1");
    op("INC");
  };

  const onNameChange = ({ target: { value } }) => {
    studentDispatch({
      type: "NAME_CHANGE",
      payload: value,
    });
  };
  const onAgeChange = ({ target: { value } }) => {
    studentDispatch({
      type: "AGE_CHANGE",
      payload: +value,
    });
  };

  return (
    <div>
      <button onClick={inc}>Plus +1</button>
      <button onClick={() => op("DEC")}>Plus - 1</button>
      <hr />
      <h1>{count}</h1>

      <hr />

      <table>
        <tr>
          <td colSpan={2}>{student.message}</td>
        </tr>
        <tr>
          <td>{student.name}</td>
          <td>
            <input onChange={onNameChange} type="text" name="" id="" />
          </td>
        </tr>
        <tr>
          <td>{student.age}</td>
          <td>
            <input onChange={onAgeChange} type="number" name="" id="" />
          </td>
        </tr>
      </table>
    </div>
  );
}
