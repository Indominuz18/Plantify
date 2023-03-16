import React from "react";
import Card from "../UI/Card";
import classes from "./NewsLetter.module.css";
import NewsLetterCard from "./NewsLetterCard";

export default function NewsLetter(props) {
  const news = props.news;

  return (
    <div className={classes.newsletter}>
      <h1 className={classes.heading}>NewsLetter</h1>
      {news.map((item) => {
        return (
          <NewsLetterCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        );
      })}
    </div>
  );
}
