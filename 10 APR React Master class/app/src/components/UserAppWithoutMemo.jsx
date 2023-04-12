import axios from "axios";
import { Message } from "./Message";
import React, { useEffect, useRef, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

export function UsersAppWithoutMemo() {
  const [users, setUsers] = useState([]);
  const [rawUsers, setRawUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(
    JSON.parse(localStorage.getItem("table-visibility"))
  );
  const [searchSting, setSearchString] = useState("Cl");

  console.log("Rednring User App");
  const limitRef = useRef();
  const buttonClickCountRef = useRef(0);

  useEffect(() => {
    axios.get(url).then((response) => {
      setRawUsers(response.data);
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

  const filterResults = () => {
    const limit = +limitRef.current.value;
    setUsers(rawUsers.slice(0, limit));
    buttonClickCountRef.current += 1;
    // setUsers(rawUsers.slice(0, +inputValue));
  };

  //   useEffect(() => {
  //     setUsers(rawUsers.slice(0, +inputValue));
  //   }, [inputValue]);

  function filterUsers(event) {
    const search = event.target.value;
    setSearchString(search);

    // setUsers(rawUsers.filter((user) => user.name.includes(search)));
  }

  return (
    <div>
      {/* <button
        onClick={() => {
          alert(buttonClickCountRef.current);
        }}
      >
        Show Button {buttonClickCountRef.current}
      </button> */}
      <h1>Users App</h1>

      <VisibilityControl toggleTable={toggleTable} value={isVisible} />

      <hr />

      {/* <div>
        <input ref={limitRef} type="number" placeholder="5" />
       
        <button onClick={filterResults}>Show</button>
      </div>

      <hr />
      <input
        onChange={filterUsers}
        id="search"
        placeholder="Search Something"
      /> */}

      <hr />
      {isVisible && (
        <div>
          {users.length == 0 ? (
            <Message message="Loading...." />
          ) : (
            <UserTable
              search={searchSting}
              onRemove={removeUser}
              users={users}
            />
          )}
        </div>
      )}
    </div>
  );
}

function VisibilityControl(props) {
  return (
    <div>
      Show Table :{" "}
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

function UserTable(props) {
  const { users, onRemove, search } = props;

  console.log("Re redning.. Table");

  useEffect(() => {
    // console.log("User Table Mounted");

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
            search={search}
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
  const { onRemove, user, search } = props;

  useEffect(() => {
    // console.log("User Row Mounted", user.id);

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
      <td className={user.name.includes(search) ? "lightyellow" : ""}>
        {user.name}
      </td>
      <td className={user.email.includes(search) ? "lightyellow" : ""}>
        {user.email}
      </td>
      <td onClick={onRemove} className="actions">
        ❌
      </td>
    </tr>
  );
}
