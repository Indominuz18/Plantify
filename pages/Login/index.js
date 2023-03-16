import React, { Fragment } from "react";
import Login from "@/components/Auth/Login";
import { useDispatch } from "react-redux";
import { profileActions } from "@/store/profile-slice";
import { useRouter } from "next/router";
import { authActions } from "@/store/auth-slice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  async function login(data) {
    const res = await fetch("../api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      const data = await res.json();
      console.log(data);
    } else {
      router.push("/");
      const data = await res.json(); // problem here
      dispatch(profileActions.setUser({ name: data.name, email: data.email }));
      dispatch(authActions.logIn());
    }
  }

  return (
    <Fragment>
      <Login login={login} />
    </Fragment>
  );
}
