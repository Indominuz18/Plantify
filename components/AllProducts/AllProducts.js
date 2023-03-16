import React from "react";
import classes from "./AllProducts.module.css";
import ProductCard from "../UI/ProductCard";
import CartIcon from "../UI/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import { uiActions } from "@/store/ui-slice";
import SearchBar from "../UI/SearchBar";

export default function AllProducts(props) {
  const showCart = useSelector((state) => state.ui.showCart);
  const dispatch = useDispatch();
  function handleModal() {
    dispatch(uiActions.toogleCart());
  }
  const products = props.products;

  console.log(products)
  return (
    <div className={classes.allproducts}>
      <div className={classes.cart}>
        <CartIcon className={classes.cart_icon} />
      </div>

      {showCart && <Modal onClick={handleModal} />}
      <SearchBar />
      <h1 className={classes.heading}>Explore!</h1>
      <div className={classes.products}>
        {
          products.map((product) => {
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
          })
        }
      </div>
    </div>
  );
}
