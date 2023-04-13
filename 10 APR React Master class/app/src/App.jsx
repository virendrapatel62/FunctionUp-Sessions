import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { RandomList } from "./components/RandomList";
import { UsersApp } from "./components/UsersApp";
import { UsersAppWithoutMemo } from "./components/UserAppWithoutMemo";
import ReducerExample from "./components/ReducerExample";

const Message = React.memo(function Message({ user }) {
  console.log("Message Rendering..");
  return <h1>Hello User , {user}</h1>;
});

function MessageApp() {
  console.log("MessageApp Rendering..");

  const [username, setUserName] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  const handleclick = () => {
    setUserName(inputRef.current.value);
  };

  // const sampleFun = useCallback(() => {}, []);
  // const sampleFun = useMemo(() => {
  //   return () => {};
  // }, []);

  // const [sampleFun] = useState(() => {});

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>

      <hr />
      <input type="text" ref={inputRef} />
      <hr />
      <button onClick={handleclick}>Show Message</button>
      {/* <Message fn={sampleFun} user={username} /> */}
    </div>
  );
}

export default function App() {
  return (
    <div>
      {/* <MessageApp />
      <RandomList /> */}

      {/* <UsersApp /> */}
      {/* <UsersAppWithoutMemo /> */}

      {/* <MessageApp /> */}

      <ReducerExample />
    </div>
  );
}
