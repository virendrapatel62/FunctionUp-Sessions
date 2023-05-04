import { useEffect, useRef, useState } from "react";
import "./App.css";

function Actions(props) {
  const actions = [
    {
      text: "h1",
      tag: "h1",
    },
    {
      text: "h2",
      tag: "h2",
    },
    {
      text: "h3",
      tag: "h3",
    },
    {
      text: "h4",
      tag: "h4",
    },
    {
      text: "I",
      tag: "em",
    },
    {
      text: "B",
      tag: "strong",
    },
  ];

  return (
    <div className="actions">
      {actions.map((action) => (
        <button onClick={() => props.onClick(action.tag)}>{action.text}</button>
      ))}
    </div>
  );
}

function App() {
  const [content, setContent] = useState("<p>Virendra</p>");
  const [selectedAction, setSelectedAction] = useState("p");
  const divRef = useRef();

  const handlePeformAction = (action) => {
    setSelectedAction(action);
  };

  useEffect(() => {
    const range = document.createRange();
    const target = divRef.current;

    range.selectNodeContents(target);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }, [content]);

  const onChange = (event) => {
    setContent(
      `<${selectedAction}>${event.target.innerText}</${selectedAction}>`
    );
  };

  return (
    <div className="App">
      <Actions onClick={handlePeformAction} />

      <span>&lt;h1&gt;Helloworld.. &lt;/h1 &gt;</span>

      <div
        ref={divRef}
        className="editor"
        contentEditable
        onKeyUp={onChange}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </div>
  );
}

export default App;
