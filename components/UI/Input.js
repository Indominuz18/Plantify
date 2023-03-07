import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  return (
    <>
      <input
        className={`${props.className} ${classes.input}`}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}
