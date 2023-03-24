import React from "react";

export const Message = (props) => {
  //   const classNames = {
  //     error: "alert alert-danger",
  //     success: "alert alert-success",
  //   };

  //   let className = classNames[props.type];

  const style = props.error
    ? "alert alert-danger"
    : props.success
    ? "alert alert-success"
    : "alert";

  return <div className={style}>{JSON.stringify(props)}</div>;
};
