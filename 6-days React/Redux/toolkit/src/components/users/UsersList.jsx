import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSlice } from "../../store/reducers/usersSlice";

export default function UsersList() {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const generateGmail = (id) => {
    dispatch(
      usersSlice.actions.generateGmail({
        id: id,
      })
    );
  };
  return (
    <div>
      <h3>Users List</h3>

      <table>
        {users.map(({ id, name, email, gmail }) => (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td onClick={() => generateGmail(id)}>{gmail || "get gmail"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
