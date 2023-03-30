import axios from "axios";
import React, { useEffect, useState } from "react";
import { useToggle } from "./useToggle";
import { useUsers } from "./useUsers";

function Users() {
  const [users, setUsers] = useUsers([]);
  const [showTotal, setShowTotal] = useToggle(true);

  let total = React.useMemo(() => {
    return users.reduce((t, user, index) => {
      console.log("✅ Total");
      return t + user?.marks || 0;
    }, 0);
  }, [users]);

  console.log("✅ Rendering Users");

  const updateUser = React.useCallback(function (userid, update) {
    setUsers((users) =>
      users.map((user) => {
        if (user.id === userid) {
          return {
            ...user,
            ...update,
          };
        }
        return user;
      })
    );
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <button onClick={() => setShowTotal()}>Toggle</button>

      {showTotal && <h4>TOTAL : {total}</h4>}
      <hr />
      <section className="users">
        {users.map((user) => (
          <UserCard onUserChange={updateUser} user={user} key={user.id} />
        ))}
      </section>
    </div>
  );
}

const UserCard = React.memo(function (props) {
  console.log("✅ Rendering User-Card");
  const { user, onUserChange } = props;
  const [values, setValues] = useState({
    email: "",
    name: "",
  });

  // useEffect(() => {
  //   console.log("Setting Users");
  //   setValues(user);
  // }, [user]);

  function handleOnClick(id) {
    onUserChange(id, values);
  }

  const onChange = ({ target: { name, value } }) => {
    if (name == "name")
      return setValues({ ...values, email: `${value}@gmail.com`, name: value });

    setValues({ ...values, [name]: Number(value) });
  };

  return (
    <div className="user-card">
      <div className="details">
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p>{user.marks}</p>
      </div>
      <div className="inputs">
        <input
          onChange={onChange}
          type="text"
          name="name"
          value={values.name}
          placeholder="Type Name"
        />
        <input
          onChange={onChange}
          type="number"
          name="marks"
          value={values.marks}
          placeholder="Type Name"
        />
        <input
          type="text"
          name="email"
          readOnly
          value={values.email}
          disabled
          placeholder="Type Email"
        />
        <input
          type="submit"
          onClick={() => handleOnClick(user.id)}
          value={"Update"}
        />
      </div>
    </div>
  );
});

export default React.memo(Users);
