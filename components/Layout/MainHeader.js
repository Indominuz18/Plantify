import Link from "next/link";
import React from "react";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
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
        <Link className={classes.link} href="/Login">
          Login
        </Link>
      </div>
    </nav>
  );
}
