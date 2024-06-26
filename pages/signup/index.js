import React from "react";
import SignUp from "@/components/Auth/SignUp";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth-slice";
import { profileActions } from "@/store/profile-slice";

export default function SignUpPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  async function addUser(data) {
    const res = await fetch("./api/signup", {
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
      dispatch(profileActions.setUser({ name: data.name, email: data.email }));
      router.push("/");
      console.log("Signed up");
    }
  }

  return <SignUp addUser={addUser} />;
}
