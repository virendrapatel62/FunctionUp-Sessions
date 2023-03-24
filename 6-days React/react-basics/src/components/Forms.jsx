import React, { useState } from "react";

export default function Forms() {
  const [formValues, setFormValues] = useState({
    email: "email",
    firstName: "Virendra",
    lastName: "Somthing",
  });

  const handleOnChange = (event) => {
    console.log("Change..");

    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  console.log(formValues);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="">Email</label>
        <input
          required
          //   onKeyUp={onChange}
          //   onKeyDown={onChange}
          type="email"
          name="email"
          id=""
          onChange={handleOnChange}
          value={formValues.email}
        />
      </div>
      <div className="input-group">
        <label htmlFor="">First Name</label>
        <input
          onChange={handleOnChange}
          value={formValues.firstName}
          type="text"
          name="firstName"
          id=""
          pattern="[0-9]"
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Last Name</label>
        <input
          onChange={handleOnChange}
          value={formValues.lastName}
          type="text"
          name="lastName"
          id=""
        />
      </div>
      <div className="input-group">
        <button>Submit</button>
      </div>
    </form>
  );
}

/** 
export default function Forms() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="">Email</label>
        <input
          required
          onChange={onEmailChange}
          value={email}
          //   onKeyUp={onChange}
          //   onKeyDown={onChange}
          type="email"
          name=""
          id=""
        />
      </div>
      <div className="input-group">
        <label htmlFor="">First Name</label>
        <input
          onChange={onFirstNameChange}
          value={firstName}
          type="text"
          name=""
          id=""
          pattern="[0-9]"
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Last Name</label>
        <input
          onChange={onLastNameChange}
          value={lastName}
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="input-group">
        <button>Submit</button>
      </div>
    </form>
  );
}

*/
