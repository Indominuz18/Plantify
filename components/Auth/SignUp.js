import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Notification from "../UI/Notification";
import classes from "./SignUp.module.css";

export default function SignUp() {
  return (
    <div className={classes.signup}>
      <h1>SignUp</h1>
      <Notification message="Password Doesn't match!" />
      <Input placeholder="Name" type="text" /> <br />
      <Input placeholder="Email" type="email" /> <br />
      <Input placeholder="Password" type="password" /> <br />
      <Input placeholder="Confirm Password" type="password" /> <br />
      <Button>Submit</Button>
    </div>
  );
}
