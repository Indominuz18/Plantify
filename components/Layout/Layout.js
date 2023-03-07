import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

export default function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      {props.children}
    </Fragment>
  );
}
