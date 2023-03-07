import React from "react";
import Input from "../UI/Input";
import classes from "./Contact.module.css";
import Button from "../UI/Button";

export default function Contact() {
  return (
    <div className={classes.Contact}>
      <h1>Contact Us!</h1>
      <Input placeholder="Name" type="text" /> <br />
      <Input placeholder="Email" type="email" /> <br />
      <textarea className={classes.textarea} placeholder="Description" /><br />
      <Button className={classes.button}>Submit</Button>
    </div>
  );
}
