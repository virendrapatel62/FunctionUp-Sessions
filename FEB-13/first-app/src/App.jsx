import logo from "./logo.svg";
import "./App.css";
import Users from "./ui/Users";
import { useEffect } from "react";

import axios from "axios";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    name: "Viren",
  });

  useEffect(() => {
    console.log("Selcted User Changed..");
  }, [selectedUser]);

  useEffect(() => {
    console.log("App Mounted"); // On Component Mount
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });

    return () => {};
  }, []);

  const handleUserClick = (user) => {
    console.log("From App", user);
    setSelectedUser(user);
  };

  const handleOnDelete = (user) => {
    console.log("delete ", user.id);

    const indexToDelete = users.findIndex((item) => {
      return item.id === user.id;
    });

    const updated = [...users];
    updated.splice(indexToDelete, 1);

    setUsers(updated);
  };

  console.log({ users });
  if (users && Array.isArray(users) && users.length > 0) {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Users
            onDelete={handleOnDelete}
            onUserClick={handleUserClick}
            users={users}
          />
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          <h1>User Details</h1>
          <hr />

          <table>
            <tr>
              <th>Id</th>
              <td>{selectedUser.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{selectedUser.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{selectedUser.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{selectedUser.phone}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
  return <h1>No Users</h1>;
}

export default App;
