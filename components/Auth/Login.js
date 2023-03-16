import React, { useState } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button";
import Link from "next/link";
import axios from "axios";
import Loader from "../UI/Loader";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false)

  async function submitHandler() {
    setSubmitted(true)
    const data = {
      email: email,
      password: password,
    };

    props.login(data)
  }

  return (
    <div className={classes.login}>
      <h1 className={classes.heading}>Welcome Back!</h1>
      <input
        type="email"
        placeholder="Email"
        className={classes.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        className={classes.email}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <div className={classes.container}>
        <input type="checkbox" />
        <p>Remember me</p>
      </div>
      <div className={classes.container}>
        <Button disabled={submitted} onClick={submitHandler} className={classes.submit}>
          {submitted ? <Loader /> : "Submit"}
        </Button>
        <Button className={classes.signup}>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}
