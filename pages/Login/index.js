import React, { Fragment } from "react";
import Login from "@/components/Auth/Login";
import { useDispatch } from "react-redux";
import { profileActions } from "@/store/profile-slice";
import { useRouter } from "next/router";

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

    if (res.status === 200) {
      console.log(res.message);
    } else {
      const data = res.json();    // problem here
      router.push("/");
      dispatch(profileActions.setUser({ name: data.name, email: data.email }));
    }
  }

  return (
    <Fragment>
      <Login login={login} />
    </Fragment>
  );
}
