import React, { useState, useEffect } from "react";

export const Student = (props) => {
  useEffect(() => {
    console.log(Student.name, "is Rendring");
    const id = setInterval(() => {
      console.log(props.name, new Date().toTimeString());
    }, 2000);
    return () => {
      console.log("Unmounteing...");
      clearInterval(id);
    };
  }, []);

  console.log(props.onDelete);
  return (
    <li>
      {props.name} <span onClick={props.onDelete}>❌</span>
    </li>
  );
};
