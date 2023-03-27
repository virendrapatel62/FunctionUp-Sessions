import { useCallback, useEffect, useRef, useState } from "react";

export function RefExample() {
  const countRef = useRef(0);
  const buttonRef = useRef();
  const inputRef = useRef();
  // const [moveCount, setMoveCount] = useState(0);
  const mouseMoveRef = useRef(0);

  const moveCount = mouseMoveRef.current;

  console.log("Rednering...");
  useEffect(() => {
    console.log(buttonRef);
    console.log(inputRef);
  }, []);

  const handleClick = () => {
    countRef.current++;

    console.log(inputRef.current.value);
    console.log("Moiuse Move Count", mouseMoveRef.current);
  };
  const handleMouseMove = () => {
    // setMoveCount(moveCount + 1);
    mouseMoveRef.current++;
  };
  return (
    <div>
      <h1>Use Ref Example</h1>

      <div
        onMouseOver={handleMouseMove}
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "tomato",
        }}
      ></div>

      <button ref={buttonRef} onClick={handleClick}>
        Click me
      </button>
      <input ref={inputRef} />
      <h1>{countRef.current}</h1>
    </div>
  );
}
