import { TextField } from "@mui/material";
import "./App.css";

import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginSuccesss = JSON.parse(localStorage.getItem("login-success"));

    if (!loginSuccesss) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/shop"} />}></Route>
      <Route path="/shop" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginSuccesss = JSON.parse(localStorage.getItem("login-success"));

    fetch("/tweet.json")
      .then((response) => response.json())
      .then((twwets) => {
        console.log(twwets);
      });
    fetch("/users.json")
      .then((response) => response.json())
      .then((twwets) => {
        console.log(twwets);
      });

    if (loginSuccesss) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <TextField
        variant="filled"
        label="Email Address"
        placeholder="Email"
        type="email"
        sx={{
          marginTop: "10px",
        }}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        fullWidth
        sx={{
          marginTop: "10px",
        }}
      />

      <button
        onClick={() => {
          localStorage.setItem("login-success", "true");
          navigate("/");
        }}
      >
        Login
      </button>
    </div>
  );
}
export default App;
