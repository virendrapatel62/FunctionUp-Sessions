import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const todoSlice = createSlice({
  name: "todo",
  reducers: {
    addTodo(todos, action) {
      console.log("add todo", action);
      todos.push(action.payload);
    },
    deleteTodo(todos, action) {
      const index = action.payload;
      todos.splice(index, 1);
    },
    updateTodo(todos, action) {
      const { index, value } = action.payload;
      todos[index] = value;
    },
  },
  initialState: ["SO Something", "Do THis", "LEarn React"],
});

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoSlice.actions.addTodo(text));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const indexRef = useRef();
  const updatedTextRef = useRef();

  function handleDelete(index) {
    dispatch(todoSlice.actions.deleteTodo(index));
  }

  function update() {
    const index = indexRef.current.value;
    const updatedText = updatedTextRef.current.value;

    const payload = {
      index: index,
      value: updatedText,
    };

    dispatch(todoSlice.actions.updateTodo(payload));
  }
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          {todo}
          <div>
            <span onClick={() => handleDelete(index)}>❌</span>
          </div>
        </div>
      ))}

      <hr />
      <div>
        <input ref={updatedTextRef} type="text" />
        <input type="number" ref={indexRef} placeholder="index" />
        <button onClick={update}>Update</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO APP</h1>
        <hr />
        <TodoForm />
        <hr />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
