import axios from "axios";
import { Message } from "./Message";
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

export function UsersApp() {
  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(
    JSON.parse(localStorage.getItem("table-visibility"))
  );

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("table-visibility", isVisible);
  }, [isVisible]);

  const toggleTable = (event) => {
    const isChecked = event.target.checked;
    setIsVisible(isChecked);
  };

  const removeUser = (index) => {
    users.splice(index, 1);
    setUsers([...users]);
  };

  return (
    <div>
      <h1>Users App</h1>

      <div>
        Show Table :{" "}
        <input
          onChange={toggleTable}
          checked={isVisible}
          type="checkbox"
          name=""
          id=""
        />
      </div>
      <hr />

      {isVisible && (
        <div>
          {users.length == 0 ? (
            <Message message="Loading...." />
          ) : (
            <UserTable onRemove={removeUser} users={users} />
          )}
        </div>
      )}
    </div>
  );
}

function UserTable(props) {
  const { users, onRemove } = props;

  useEffect(() => {
    console.log("User Table Mounted");

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
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <UserRow
            onRemove={() => onRemove(index)}
            key={user.id}
            user={user}
            sno={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
}

function UserRow(props) {
  const { onRemove, user } = props;

  useEffect(() => {
    console.log("User Row Mounted", user.id);

    // let interval = null;
    // interval = setInterval(() => {
    //   console.log("User 1", user.id);
    // }, 1000);

    return () => {
      //   clearInterval(interval);
      console.log("User Row Un mounted..", user.id);
    };
  }, []);

  return (
    <tr>
      <td>{props.sno}</td>
      <td className={user.name.charAt(0) == "C" ? "lightyellow" : ""}>
        {user.name}
      </td>
      <td>{user.email}</td>
      <td onClick={onRemove} className="actions">
        ❌
      </td>
    </tr>
  );
}
