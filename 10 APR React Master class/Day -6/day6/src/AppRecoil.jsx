import { useState } from "react";
import "./App.css";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const counterAtom = atom({
  key: "counter",
  default: 10,
});
const studentAtom = atom({
  key: "App_student",
  default: {
    data: [
      {
        MainId: 1111,
        firstName: "Sherlock",
        lastName: "Homes",
        categories: [
          {
            CategoryID: 1,
            CategoryName: "Example",
          },
        ],
      },
      {
        MainId: 122,
        firstName: "James",
        lastName: "Watson",
        categories: [
          {
            CategoryID: 2,
            CategoryName: "Example2",
          },
        ],
      },
    ],
    messages: [], // blank json
    success: true, // boolean value
  },
});

const ageSelector = selector({
  key: "age",
  get: ({ get }) => get(studentAtom).age,
});

const nameSelector = selector({
  key: "name",
  get: ({ get }) => get(studentAtom).name,
});
const cnameSelector = selector({
  key: "cname",
  get: ({ get }) => {
    const student = get(studentAtom);
    const obj = student.data.find((i) => i.MainId === 122);
    const cname = obj.categories[0].CategoryName;
    return cname;
  },
});

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td colSpan={2}>P</td>
        </tr>
        <tr>
          <td>
            <CounterMessage />
          </td>
          <td>
            <CounterMessage />
          </td>
        </tr>
        <tr>
          <td>
            <CounterChange />
          </td>
          <td>
            <CounterChange />
          </td>
        </tr>
      </table>

      <Student />
      <StudentUpdate />
    </div>
  );
}

function Student() {
  const name = useRecoilValue(nameSelector);
  const age = useRecoilValue(ageSelector);

  const cname = useRecoilValue(cnameSelector);

  return (
    <div>
      <h1>Student</h1>
      <table>
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{cname}</td>
        </tr>
      </table>
    </div>
  );
}
function StudentUpdate() {
  const setStudent = useSetRecoilState(studentAtom);

  const cname = useRecoilValue(cnameSelector);

  function changeName(event) {
    setStudent((student) => ({
      ...student,
      name: event.target.value,
    }));
  }
  function changeAge(event) {
    setStudent((student) => ({
      ...student,
      age: event.target.value,
    }));
  }

  return (
    <div>
      <table>
        <tr>
          <td>
            <input type="text" onChange={changeName} />
          </td>
          <td>
            <input type="number" onChange={changeAge} />
          </td>
          <td>{cname}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;

function CounterMessage() {
  // const [count, setCount] = useRecoilState(counterAtom);
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

function CounterChange() {
  const [count, setCount] = useRecoilState(counterAtom);
  // const setCount = useSetRecoilState(counterAtom);
  // const count = useRecoilValue(counterAtom);
  return <button onClick={() => setCount(count + 1)}>Update Value</button>;
}
