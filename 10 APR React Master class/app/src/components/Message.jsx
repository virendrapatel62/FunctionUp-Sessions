export function Message(props) {
  console.log(props);

  const classmapping = {
    success: "green",
    error: "red",
  };

  const className = classmapping[props.type] || "info";

  return (
    <p className={`alert ${className}`}>
      {props.children || props.message} <span onClick={props.close}>❌</span>
    </p>
  );

  // const className =
  //   props.type === "success"
  //     ? "green"
  //     : props.type === "error"
  //     ? "red"
  //     : "info";

  // if (props.type == "success") {
  //   return <p className="green">{props.children || props.message}</p>;
  // }
  // if (props.type == "error") {
  //   return <p className="red">{props.children || props.message}</p>;
  // }

  // return <p className="info">{props.children || props.message}</p>;

  // if (props.children) {
  //   return <p>{props.children}</p>;
  // }
  // if (props.message) {
  //   return <p>{props.message}</p>;
  // }
}
