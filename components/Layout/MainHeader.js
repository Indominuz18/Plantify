import { authActions } from "@/store/auth-slice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import classes from "./MainHeader.module.css";

export default function MainHeader() {

  const isloggedIn = useSelector((state) => state.auth.isloggedIn)
  const dispatch = useDispatch()
  function loggoutHandler()
  {
    dispatch(authActions.logOut())
  }

  return (
    <nav className={classes.navbar}>
      <Link href="/">
        <h1 className={classes.brand_name}>Plantify</h1>
      </Link>
      <div className={classes.links}>
        <Link className={classes.link} href="/">
          Home
        </Link>
        <Link className={classes.link} href="/Allproducts">
          All Products
        </Link>
        <Link className={classes.link} href="/Newsletter">
          Newsletter
        </Link>
        {!isloggedIn && <Link className={classes.link} href="/Login">
          Login
        </Link>}
        {isloggedIn && <Link className={classes.link} href="/Profile">
          Profile
        </Link>}
        {isloggedIn && <Button onClick={loggoutHandler} className={classes.button}>
          Logout
        </Button>}
      </div>
    </nav>
  );
}
