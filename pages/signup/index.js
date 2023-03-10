import React from "react";
import SignUp from "@/components/Auth/SignUp";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth-slice";

export default function SignUpPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  async function addUser(data) {
    const res = await fetch("../api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch(authActions.logIn());

    if (res.status === 200) {
      console.log(res.message);
    } else {
      console.log("Signedup in");
    }
    router.push("/");
  }

  return <SignUp addUser={addUser} />;
}
