import { useDispatch } from "react-redux";
import { counterActions } from "../../store/actions";

export function CounterActions() {
  const dispatch = useDispatch();

  const change = (type) => {
    dispatch({
      type: type,
    });
  };
  return (
    <div>
      <button onClick={() => change(counterActions.inc)}>INC</button>
      <span> </span>
      <button onClick={() => change(counterActions.dec)}>DEC</button>
      <span> </span>
      <button onClick={() => change(counterActions.reset)}>RESET</button>
    </div>
  );
}
