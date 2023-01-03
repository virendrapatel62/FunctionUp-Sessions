import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/a-page" element={<A />}></Route>
          <Route path="/b-page" element={<B />}></Route>
          <Route path="/c-page" element={<C />}></Route>
          <Route
            path="*"
            element={
              <Fragment>
                <h1>Not Found</h1>
                <Link to={"/"}>Home</Link>
              </Fragment>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div>
      <Link to="/a-page">Go to A</Link>
      <br />
      <br />
      <Link to="/b-page">Go to B</Link>

      <br />
      <br />
      <Link to="/c-page">Go to C</Link>
      <br />
      <br />
      <Link to="/d-page">Go to D</Link>
      <br />
      <br />
      <Link to="/anypage">ANy PAge</Link>
    </div>
  );
}

function A() {
  return (
    <div>
      <h1>A</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        facere fugit quaerat nulla et eligendi perspiciatis in inventore vero.
        Saepe, ab quo. Voluptate illum tempore facilis excepturi porro in ea.
      </p>

      <Link to={"/"}>Home</Link>
    </div>
  );
}
function B() {
  return (
    <div>
      <h1>B</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        facere fugit quaerat nulla et eligendi perspiciatis in inventore vero.
        Saepe, ab quo. Voluptate illum tempore facilis excepturi porro in ea.
      </p>
      <Link to={"/"}>Home</Link>
    </div>
  );
}
function C() {
  return (
    <div>
      <h1>C</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        facere fugit quaerat nulla et eligendi perspiciatis in inventore vero.
        Saepe, ab quo. Voluptate illum tempore facilis excepturi porro in ea.
      </p>
      <Link to={"/"}>Home</Link>
    </div>
  );
}
