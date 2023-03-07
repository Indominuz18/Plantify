import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import Button from "./Button";

export default function Modal(props) {
  return (
    <Fragment>
      <div onClick={props.onClick} className={classes.backdrop}></div>
      <div className={classes.modal}>
        <div className={classes.img_div}>
          <h1>Title/Product Name</h1>
          <img
            className={classes.img}
            src="https://cdn.pixabay.com/photo/2015/06/25/14/13/fern-821293_1280.jpg"
          />
        </div>
        <div className={classes.info_div}>
          <h1>Description</h1>
          <p>
            Praesent ultrices enim massa, ac ornare felis mattis ut. Maecenas
            dui velit, finibus vel molestie eu, maximus eu neque. Aliquam erat
            volutpat. Morbi rutrum, elit ac hendrerit faucibus, massa elit
            ullamcorper neque, eu hendrerit felis velit in quam. Aenean ac
            commodo sapien. Aliquam consequat id nisi vel gravida. Cras eu justo
            at dolor suscipit vestibulum et non erat. Cras sapien magna, dapibus
            sed aliquet nec, sollicitudin id enim. Proin mattis libero a
            facilisis tincidunt.
          </p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </Fragment>
  );
}
