import React from "react";
import { Link } from "react-router-dom";

import classes from "./styles/Header.module.css";
export function Header() {
  return (
    <header className={classes.header}>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/counter"}>Counter</Link>
      </div>
      <div>
        <Link to={"/sum-calculator-ref"}>Sum CLC Ref</Link>
      </div>
      <div>
        <Link to={"/sum-calculator-state"}>Sum CLC State</Link>
      </div>
    </header>
  );
}
