import React from "react";
import classes from "./Product.module.css";
import Button from "../UI/Button";
export default function Product() {
  return (
    <div className={classes.product}>
      <div className={classes.img_div}>
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8&w=1000&q=80"
          className={classes.image}
        />
      </div>
      <div className={classes.detail_div}>
        <h1>Title</h1>
        <p>
          Pellentesque lobortis ante ac urna malesuada, eget rutrum est
          convallis. Proin bibendum nisl odio, quis viverra nunc facilisis ac.
          Praesent in nibh in metus vehicula tempor. Aliquam sit amet diam
          ultrices, rhoncus leo in, suscipit tortor. In semper mi eget odio
          tincidunt sagittis. Ut suscipit egestas nulla ut tincidunt. Proin
          sapien elit, placerat ac justo sit amet, consectetur ullamcorper orci.
          Nam mattis ex quis justo sagittis, non vulputate risus gravida.
        </p>
        <h1>Price: $10.69/plant</h1>
        <Button className={classes.button}>Add to Cart</Button>
      </div>
    </div>
  );
}
