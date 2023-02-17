import logo from "./logo.svg";
import "./App.css";
import Users from "./ui/Users";
import { useEffect } from "react";

import axios from "axios";
import { useState } from "react";
import UserForm from "./ui/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    console.log("Selcted User Changed..");
  }, [selectedUser]);

  useEffect(() => {
    // console.log("App Mounted"); // On Component Mount
    // axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    //   setUsers(response.data);
    // });

    return () => {};
  }, []);

  const [activePage, setActivePage] = useState(3);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setActivePage(2);
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

  const handleOnCreate = (user) => {
    setUsers([user, ...users]);
  };

  console.log({ users });
  return (
    <div>
      <div>
        <button onClick={() => setActivePage(1)}>List</button>
        <button onClick={() => setActivePage(2)}>Details</button>
        <button onClick={() => setActivePage(3)}>Form</button>
      </div>

      {activePage == 1 && (
        <div>
          {users.length > 0 ? (
            <Users
              onDelete={handleOnDelete}
              onUserClick={handleUserClick}
              users={users}
            />
          ) : (
            <h1>No Users</h1>
          )}
        </div>
      )}
      {activePage == 2 && (
        <div>
          <h1>User Details</h1>
          <hr />
          <h1>
            <pre>{JSON.stringify(selectedUser, null, 3)}</pre>
          </h1>
        </div>
      )}
      {activePage == 3 && (
        <div className="form-wrapper">
          <hr />
          <UserForm onCreate={handleOnCreate} />
        </div>
      )}
    </div>
  );
}

export default App;
