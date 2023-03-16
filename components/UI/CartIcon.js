import { uiActions } from "@/store/ui-slice";
import React from "react";
import { useDispatch } from "react-redux";
import classes from "./CartIcon.module.css";

export default function CartIcon(props) {
  const dispatch = useDispatch();
  function cartHandler() {
    dispatch(uiActions.toogleCart());
  }

  return (
    <div onClick={cartHandler} className={`${props.className} ${classes.cart}`}>
      <i className="fa-solid fa-cart-shopping"></i>
    </div>
  );
}
