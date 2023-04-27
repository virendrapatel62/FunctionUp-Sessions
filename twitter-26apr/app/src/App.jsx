import { Grid, TextField } from "@mui/material";
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

  const images = new Array(1000).fill(0).map((x, index) => {
    return `https://picsum.photos/1000/500?q=${index}`;
  });

  console.log(images);

  return (
    <div>
      <section>
        <Grid container>
          <Grid item xs={12}>
            <div className="b">header</div>
          </Grid>
          <Grid h1 xs={3}>
            <div className="h-200 t">sidebar</div>
          </Grid>
          <Grid h1 xs={6}>
            <div className="h-200 b">main content</div>
          </Grid>
          <Grid h1 xs={3}>
            <div className="h-200 t">right Content</div>
          </Grid>
        </Grid>
      </section>

      <h1>Home</h1>
      <Link to={"/login"}>Login</Link>
      {images.map((image, index) => {
        return <img key={index} src={image} style={{ width: "100px" }} />;
      })}
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
