import React, { useState } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button";
import Link from "next/link";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler() {
    const res = await axios.post("../../pages/api/login", {
      email: email,
      password: password
    });

    if(res.status === 200)
    {
      console.log(res.message)
    }else{
      console.log("logged in")
    }

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
        <Button onClick={submitHandler} className={classes.submit}>
          Submit
        </Button>
        <Button className={classes.signup}>
          <Link href="/signup">SignUp</Link>
        </Button>
      </div>
    </div>
  );
}
