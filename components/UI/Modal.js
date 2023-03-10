import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import Button from "./Button";
import ProductCart from "./ProductCart";

export default function Modal(props) {
  return (
    <Fragment>
      <div onClick={props.onClick} className={classes.backdrop}></div>
      <div className={classes.modal}>
        <h1>Cart</h1>
        <div>
          <ProductCart/>
        </div>
      </div>
    </Fragment>
  );
}
