import { useDispatch } from "react-redux";

export function CouterAction() {
  const dispatch = useDispatch();

  const inc = (value = 1) => {
    dispatch({
      type: "INC",
      payload: value,
    });
  };
  const dec = () => {
    dispatch({
      type: "DEC",
    });
  };
  return (
    <h1>
      <p>
        <button onClick={() => inc(1)}>INC</button>
      </p>
      <p>
        <button onClick={dec}>DEC</button>
      </p>
      <p>
        <button onClick={() => inc(10)}>INC +10</button>
      </p>
    </h1>
  );
}
