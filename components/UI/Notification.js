import React from "react";
import classes from "./Notification.module.css";

export default function Notification(props) {
  return (
    <div className={classes.Notification}>
      <p>{props.message}</p>
    </div>
  );
}
