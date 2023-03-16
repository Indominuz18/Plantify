import React from "react";
import { useSelector } from "react-redux";
import classes from "./Profile.module.css";
import ProfileCard from "./ProfileCard";

export default function Profile() {
  const name = useSelector((state) => state.profile.name);
  const email = useSelector((state) => state.profile.email);

  console.log(name, email);
  return (
    <div className={classes.Profile}>
      <h1>Welcome {name}!</h1>
      <p>Email - {email}</p>
      <ProfileCard />
    </div>
  );
}
