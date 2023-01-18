import { Fragment, useEffect, useRef } from "react";
import { useState } from "react";
import { Students } from "./components/Students";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import { SumCalculatorRef } from "./components/SumCalculatorRef";
import { SumCalculatorState } from "./components/SumCalculatorState";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";

// {/* <Students /> */}
//       {/* <Counter />
//       <SayHello name="virendra" onClick={clickHandler} />
//       <SayHello name="Sandeep" />
//       <SayHello /> */}

//       <SumCalculatorRef />
//       <SumCalculatorState />

function App() {
  const clickHandler = (param) => {
    console.log("YOu Clicked", param);
  };

  return (
    <Fragment>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}></Route>
          <Route
            path="/sum-calculator-ref"
            element={<SumCalculatorRef />}
          ></Route>
          <Route
            path="/sum-calculator-state"
            element={<SumCalculatorState />}
          ></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
