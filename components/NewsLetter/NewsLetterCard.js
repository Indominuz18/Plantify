import React from "react";
import classes from "./NewsLetterCard.module.css";
import Card from "../UI/Card";
import Link from "next/link";
import Button from "../UI/Button";

export default function NewsLetterCard(props) {
  const title = props.title;
  const description = props.description;
  const img = props.img;
  const url_id = props.id

  return (
    <Card className={classes.news_card}>
      <img
        className={classes.image}
        src={img}
      />
      <div className={classes.text}>
        <h1 className={classes.heading}>{title}</h1>
        <p className={classes.description}>
          {description}
        </p>
        <Link className={classes.link} href={`/Newsletter/${url_id}`}>
          <Button>Read More</Button>
        </Link>
      </div>
    </Card>
  );
}
