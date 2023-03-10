import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Notification from "../UI/Notification";
import classes from "./SignUp.module.css";
import axios from "axios";
export default function SignUp(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();

  async function submitHandler() {
    if (password != cpassword) {
      console.log("password doesn't match!");
      return;
    }
    const user = { name: name, email: email, password: password}
    props.addUser(user)
  }

  return (
    <div className={classes.signup}>
      <h1>SignUp</h1>
      <Notification message="Password Doesn't match!" />
      <Input
        placeholder="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <Input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <Input
        placeholder="Confirm Password"
        type="password"
        onChange={(e) => setCPassword(e.target.value)}
      />{" "}
      <br />
      <Button onClick={submitHandler}>Submit</Button>
    </div>
  );
}
