import React from "react";
import Card from "./Card";
import classes from "./ProductCard.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";
export default function ProductCard(props) {

  const product_id = props.id

  return (
    <Card className={`${props.className} ${classes.ProductCard} `}>
      <img className={classes.image} src={props.img} />
      <Link href={`./Allproducts/${product_id}`}>
        <h1 className={classes.title}>{props.title}</h1>
      </Link>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.price}>${props.price}</p>
      <Button>Add to Cart</Button>
    </Card>
  );
}
