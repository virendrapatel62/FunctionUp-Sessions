import "./App.css";
import { Provider } from "react-redux";
import { CouterAction } from "./components/CounterActions";
import { CouterDisplay } from "./components/CounterDisplay";
import { store } from "./store";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World..</h1>
      <CouterDisplay></CouterDisplay>
      <CouterAction></CouterAction>

      <Todos />
    </Provider>
  );
}

export default App;
