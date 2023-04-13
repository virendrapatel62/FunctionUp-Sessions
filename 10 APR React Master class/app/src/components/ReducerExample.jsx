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

  switch (type) {
    case "NAME_CHANGE": {
      return {
        ...student,
        name: payload,
        message: getMessage(payload, student.age),
      };
    }
    case "AGE_CHANGE": {
      return {
        ...student,
        age: payload,
        message: getMessage(student.name, payload),
      };
    }
    case "ADDRESS_CHANGE": {
      return {
        ...student,
        address: payload,
      };
    }
    case "RESET": {
      return {};
    }

    default: {
      return student;
    }
  }
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

  return (
    <div>
      <button onClick={inc}>Plus +1</button>
      <button onClick={() => op("DEC")}>Plus - 1</button>
      <hr />
      <h1>{count}</h1>

      <hr />

      <StudentTable
        student={student}
        // onAgeChange={onAgeChange}
        // onNameChange={onNameChange}
        dispatch={studentDispatch}
      />
    </div>
  );
}

const StudentTable = React.memo(({ student, dispatch }) => {
  console.log("Student table Render");

  const onNameChange = ({ target: { value } }) => {
    dispatch({
      type: "NAME_CHANGE",
      payload: value,
    });
  };
  const onAgeChange = ({ target: { value } }) => {
    dispatch({
      type: "AGE_CHANGE",
      payload: +value,
    });
  };

  return (
    <table>
      <tr>
        <td colSpan={2}>{student.message}</td>
      </tr>
      <tr>
        <td colSpan={2}>
          <button
            onClick={() => {
              dispatch({
                type: "RESET",
              });
            }}
          >
            Clear Student
          </button>
        </td>
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
      <tr>
        <td>{student.address}</td>
        <td>
          <input
            onChange={(event) =>
              dispatch({
                type: "ADDRESS_CHANGE",
                payload: event.target.value,
              })
            }
            type="text"
            name=""
            id=""
          />
        </td>
      </tr>
    </table>
  );
});
