import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usersSlice } from "../../store/reducers/usersSlice";
import UsersList from "./UsersList";

export default function Users() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        dispatch(usersSlice.actions.setUsers(users));
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <UsersList />
    </div>
  );
}
