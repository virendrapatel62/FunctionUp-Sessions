import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const items = ["Angular", "React", "Solid", "Vue", "Remix"];

  function onClick(value, index) {
    console.log("Called by List", index, value);
  }

  return (
    <div>
      <LoginForm />
      {/* <List items={items} onClick={onClick} /> */}
    </div>
  );
}

const LoginForm = () => {
  const email = useRef();
  const password = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value: emailV } = email.current;
    const { value: passwordV } = password.current;

    if (!emailV) {
      alert("Enter email");
      return;
    }

    if (!emailV.includes("@fu.com")) {
      alert("InValid Email");
      return;
    }

    if (!passwordV) {
      alert("Enter password");
      return;
    }

    alert("Shi h ");
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input ref={email} type="email" />
        <input ref={password} type="password" />

        <br />

        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};

export default App;

const List = (props) => {
  console.log(props);
  const handleOnClick = (value, index) => {
    props.onClick(value, index);
  };

  return (
    <ul>
      {props.items.map((item, index) => (
        <li
          onClick={() => {
            handleOnClick(item, index);
          }}
        >
          <ListItem item={item}></ListItem>
        </li>
      ))}
    </ul>
  );
};

const ListItem = (props) => {
  return (
    <span
      style={{
        padding: "1rem",
        display: "block",
        border: "1px solid tomato",
        margin: "1rem",
        borderRadius: "1rem",
      }}
    >
      {props.item}
    </span>
  );
};
