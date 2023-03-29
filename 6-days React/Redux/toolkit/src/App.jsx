import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/counter/Counter";
import Todos from "./components/todos/Todos";
import Users from "./components/users/Users";

function App() {
  const state = useSelector((state) => state);
  return (
    <Fragment>
      {/* <Counter /> */}
      <hr />
      <Todos />
      <hr />

      <Users />
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </Fragment>
  );
}

export default App;
