import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { fetchTweets } from "./services/tweets";
import { fetchUsers } from "./services/users";
import { useSetRecoilState } from "recoil";
import { tweetsAtom } from "./recoil/tweets";
import { usersAtom } from "./recoil/users";

function App() {
  const setTweets = useSetRecoilState(tweetsAtom);
  const setUsers = useSetRecoilState(usersAtom);

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
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
}

export default App;
