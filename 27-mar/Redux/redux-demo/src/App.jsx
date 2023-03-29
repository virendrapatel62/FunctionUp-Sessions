import "./App.css";
import { Provider } from "react-redux";
import { CouterAction } from "./components/CounterActions";
import { CouterDisplay } from "./components/CounterDisplay";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World..</h1>
      <CouterDisplay></CouterDisplay>
      <CouterAction></CouterAction>
    </Provider>
  );
}

export default App;
