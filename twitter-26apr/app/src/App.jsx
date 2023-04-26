import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Button,
  TextField,
  Box,
  Paper,
  Snackbar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                onClick={() => {
                  setShow(!show);
                }}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              {show && (
                <Fragment>
                  <Button color="inherit">Login</Button>
                  <Button color="inherit">Login</Button>
                  <Button color="inherit">Login</Button>
                  <Button color="inherit">Login</Button>
                  <Button color="inherit">Login</Button>
                </Fragment>
              )}
            </Toolbar>

            {!show && (
              <Fragment>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
              </Fragment>
            )}
          </AppBar>
        </Box>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => {
          setOpen(false);
        }}
        message="Note archived"
      />

      <h1>Hello World..</h1>

      <Paper
        sx={{
          padding: "10px",
          margin: "10px",
        }}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dicta
          vel sit doloribus et iure praesentium vero laborum, perspiciatis
          distinctio harum tempora earum impedit placeat velit fugiat
          laudantium, maiores debitis?
        </p>
      </Paper>

      <Button
        onClick={() => {
          setOpen(!open);
        }}
        color="error"
        variant="contained"
      >
        Toggle Toast
      </Button>
      <Button color="info" variant="contained">
        Click Here
      </Button>
      <Button color="success" variant="contained">
        Click Here
      </Button>
      <hr />

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
        label="Email Address"
        placeholder="Email"
        type="email"
        fullWidth
        sx={{
          marginTop: "10px",
        }}
      />
      <TextField
        variant="standard"
        label="Email Address"
        placeholder="Email"
        type="email"
        fullWidth
        sx={{
          marginTop: "10px",
        }}
      />
    </div>
  );
}

export default App;
