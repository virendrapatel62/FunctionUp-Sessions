import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function CreateProduct() {
  return (
    <div>
      <h1> CreateProduct</h1>
      <hr />

      <Link to={"software"}>Add Software Product</Link>
      <br />
      <Link to={"hardware"}>Add Hardware Product</Link>

      <hr />
      <Outlet />
    </div>
  );
}
