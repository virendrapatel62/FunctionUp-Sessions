import { Fragment, useEffect, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { fetchTweets } from "./services/tweets";
import { fetchUsers } from "./services/users";
import { useRecoilState, useSetRecoilState } from "recoil";
import { tweetsAtom } from "./recoil/tweets";
import { authAtom, usersAtom } from "./recoil/users";
import { log } from "joi-browser";

const PR = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authAtom);
  useEffect(() => {
    console.log("First");
    if (!auth?.isLoggedIn) {
      navigate("/login");
      console.log("navigating FormPR");
    }
  }, [auth]);

  return children;
};

function App() {
  const setTweets = useSetRecoilState(tweetsAtom);
  const setUsers = useSetRecoilState(usersAtom);
  const [auth, setAuth] = useRecoilState(authAtom);
  const navigate = useNavigate();

  const isFirstRender = useRef(true);

  useEffect(() => {
    console.log("second render");
    if (isFirstRender.current) {
      const authFromLocal = JSON.parse(localStorage.getItem("auth"));
      setAuth(authFromLocal);
    } else {
      localStorage.setItem("auth", JSON.stringify(auth));
    }

    isFirstRender.current = false;
  }, [auth]);

  useEffect(() => {
    fetchTweets().then((tweets) => {
      setTweets(tweets);
    });
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <PR>
              <HomePage />
            </PR>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <PR>
              <Register />
            </PR>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
