import React from "react";
import Card from "./Card";
import classes from "./ProductCard.module.css";
import Button from "./Button";
export default function ProductCard(props) {
  return (
    <Card className={`${props.className} ${classes.ProductCard} `}>
      <img className={classes.image} src={props.img} />
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.description}>{props.description}</p>
      <p>${props.price}</p>
      <Button>Add to Cart</Button>
    </Card>
  );
}
