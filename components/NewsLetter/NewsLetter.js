import React from "react";
import Card from "../UI/Card";
import classes from "./NewsLetter.module.css";
import NewsLetterCard from "./NewsLetterCard";

export default function NewsLetter() {
  return (
    <div className={classes.newsletter}>
      <h1 className={classes.heading}>NewsLetter</h1>
        <NewsLetterCard />
    </div>
  );
}
