import React, { useState } from "react";
import CartButton from "./CartButton";
import classes from "./ProductCart.module.css";

export default function ProductCart() {

  let [value, setValue] = useState(0)


  return (
    <div className={classes.ProductCart}>
      <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8&w=1000&q=80" />
      <div className={classes.info}>
        <p className={classes.product_name}>Product Name</p>
        <p className={classes.price}>$10.29</p>
        <CartButton onClick={() => setValue(value += 1)}>+</CartButton>
        <input type="number" value={value} className={classes.input}/>
        <CartButton onClick={() => setValue(value -= 1)} >-</CartButton>
      </div>
    </div>
  );
}
