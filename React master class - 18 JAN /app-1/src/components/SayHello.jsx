const SayHello = (props) => {
  return (
    <h1 onClick={() => props.onClick(props.name)}>
      Hello {props.name || "User"}
    </h1>
  );
};

export { SayHello };
