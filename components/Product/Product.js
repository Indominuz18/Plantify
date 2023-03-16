import React from "react";
import classes from "./Product.module.css";
import Button from "../UI/Button";
export default function Product(props) {


  return (
    <div className={classes.product}>
      <div className={classes.img_div}>
        <img
          src={props.product.img}
          className={classes.image}
        />
      </div>
      <div className={classes.detail_div}>
        <h1>{props.product.title}</h1>
        <p>
          {props.product.description}
        </p>
        <h1>Price: ${props.product.price}/plant</h1>
        <Button className={classes.button}>Add to Cart</Button>
      </div>
    </div>
  );
}
