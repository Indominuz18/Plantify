import React from "react";
import Button from "./Button";
import classes from "./CartButton.module.css";

export default function CartButton(props) {
  return (
    <Button
      onClick={props.onClick}
      className={`${props.className} ${classes.cart_button}`}
    >
      {props.children}
    </Button>
  );
}
