import React, { useState } from "react";

export default function UserForm(props) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = formValues.firstName + " " + formValues.lastName;

    const user = {
      ...formValues,
      id: crypto.randomUUID(),
      name: name,
    };

    props.onCreate(user);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        type="text"
        onChange={handleOnChange}
        name="firstName"
        id=""
      />
      <input
        placeholder="Last Name"
        type="text"
        onChange={handleOnChange}
        name="lastName"
        id=""
      />
      <input
        placeholder="Email"
        type="email"
        onChange={handleOnChange}
        name="email"
        id=""
      />
      <input
        placeholder="Phone"
        type="number"
        onChange={handleOnChange}
        name="phone"
        id=""
      />
      <input type="submit" value={"Create User"} />
    </form>
  );
}
