import axios from "axios";
import { Message } from "./Message";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const url = "https://jsonplaceholder.typicode.com/users";

function calculateAvg(users = []) {
  let total = 0;
  console.log("Calculating  Avg");
  users.forEach((user) => {
    total += user.marks;
  });

  const avg = Number(total / users.length);

  return avg ? avg.toFixed(2) : 0;
}

export function UsersApp() {
  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  console.log("UsersApp Rendering : XYZ");

  // const [average, setAverage] = useState(0);

  // useEffect(() => {
  //   setAverage(calculateAvg(users));
  // }, [users]);

  const average = useMemo(() => {
    return calculateAvg(users);
  }, [users]);

  console.log({ average });

  useEffect(() => {
    axios.get(url).then((response) => {
      let users = response.data;
      users = users.map((user) => {
        user.marks = Math.round(Math.random() * 100);
        return user;
      });
      setUsers(users);
    });
  }, []);

  const toggleTable = (event) => {
    const isChecked = event.target.checked;
    setIsVisible(isChecked);
  };

  const removeUser = useCallback((id) => {
    setUsers((users) => {
      users.splice(
        users.findIndex((u) => u.id == id),
        1
      );
      return [...users];
    });
  }, []);

  return (
    <div>
      <h1>Users App</h1>

      <h1>Marks Avg : {average}</h1>

      <VisibilityControl toggleTable={toggleTable} value={isVisible} />

      <hr />

      <hr />
      {isVisible && <h1>User Table Heading..</h1>}
      {
        <div>
          {users.length == 0 ? (
            <Message message="Loading...." />
          ) : (
            <UserTable onRemove={removeUser} users={users} />
          )}
        </div>
      }
    </div>
  );
}

function VisibilityControl(props) {
  console.log("VisibilityControl Rendering");
  return (
    <div>
      Toggle Heading :{" "}
      <input
        onChange={props.toggleTable}
        checked={props.value}
        type="checkbox"
        name=""
        id=""
      />
    </div>
  );
}

const UserTable = React.memo(_UserTable);

function _UserTable(props) {
  const { users, onRemove } = props;

  console.log("UserTable Rendring.");

  useEffect(() => {
    return () => {
      console.log("User Table Un mounted..");
    };
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>UserName</th>
          <th>email</th>
          <th>Marks</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <UserRow onRemove={() => onRemove(user.id)} key={index} user={user} />
        ))}
      </tbody>
    </table>
  );
}

const UserRow = React.memo(function UserRow(props) {
  const { onRemove, user } = props;

  console.log("User Row Rendering");

  useEffect(() => {
    return () => {
      console.log("User Row Un mounted..", user.id);
    };
  }, []);

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.marks}</td>
      <td onClick={onRemove} className="actions">
        ❌
      </td>
    </tr>
  );
});
