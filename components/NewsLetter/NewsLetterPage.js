import React from "react";
import classes from "./NewsLetterPage.module.css";

export default function NewsLetterPage(props) {
  const data = props.newsData;

  return (
    <div className={classes.news}>
      <h1 className={classes.heading}>{data.title}</h1>
      <img src={data.img} />
      <p>{data.description}</p>
    </div>
  );
}
