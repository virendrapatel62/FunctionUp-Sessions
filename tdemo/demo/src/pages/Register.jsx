import React, { useState } from "react";

import joi from "joi-browser";

const userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8),
  name: joi.string().required(),
});

export default function Register() {
  const [formValues, setFormValues] = useState({
    name: "Virendta Patel",
    email: "virendra@gmail.com",
    password: "123456789",
  });

  const [error, setError] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    localStorage.setItem("users", JSON.stringify(formValues));
  }

  function handleOnChange(event) {
    const newValue = {
      ...formValues,
      [event.target.name]: event.target.value,
    };

    setFormValues(newValue);

    const { error, value } = userSchema.validate(newValue);

    if (error) {
      setError(error.details[0].message);
      return;
    }

    setError("");

    console.log(newValue);
  }

  console.log(formValues);

  return (
    <div>
      <h1>Register Page</h1>
      <hr />

      <form onSubmit={handleFormSubmit} action="">
        <div className="col-6 mx-auto">
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-group">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              name="email"
              onChange={handleOnChange}
              type="text"
              value={formValues.email}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              name="password"
              value={formValues.password}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Full name
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              value={formValues.name}
              name="name"
              className="form-control"
            />
          </div>

          <hr />
          <button className="btn btn-dark" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
