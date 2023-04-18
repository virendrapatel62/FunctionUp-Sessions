import React from "react";
import "./App.css";

const withHeader = (Component, color) => {
  return (props) => {
    return (
      <div
        className="header"
        style={{
          color: color,
        }}
      >
        <h1>THis is Header</h1>
        <Component {...props} />
      </div>
    );
  };
};

const _StudentPage = (props) => {
  return (
    <table>
      <caption>{props.caption}</caption>
      <tbody>
        <tr>
          <td>Student NAme</td>
          <td>age</td>
          <td>address</td>
        </tr>
        <tr>
          <td>Student NAme</td>
          <td>age</td>
          <td>address</td>
        </tr>
        <tr>
          <td>Student NAme</td>
          <td>age</td>
          <td>address</td>
        </tr>
      </tbody>
    </table>
  );
};

const StudentPageWithHeader = withHeader(_StudentPage, "red");

const StudentINput = withHeader(({ name, age }) => {
  return (
    <div>
      <h1>
        THis is {name} {age}
      </h1>
    </div>
  );
}, "blue");

function PropsPrint(props) {
  return <pre>{JSON.stringify(props)}</pre>;
}

export default function App() {
  const student = {
    name: "John Doe",
    age: 20,
    address: "123 Main Street",
  };
  return (
    <div>
      <StudentPageWithHeader caption={"this is table"} />
      <StudentINput {...student} />

      <PropsPrint {...student} />
    </div>
  );
}
