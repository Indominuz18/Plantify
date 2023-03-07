import React from "react";
import classes from "./AllProducts.module.css";
import ProductCard from "../UI/ProductCard";

export default function AllProducts(props) {
  return (
    <div className={classes.allproducts}>
      <h1 className={classes.heading}>Explore!</h1>
      <div className={classes.products}>
        {props.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              img={product.img}
              description={product.description}
              title={product.title}
              price={product.price}
              className={classes.item}
            />
          );
        })}
      </div>
    </div>
  );
}
