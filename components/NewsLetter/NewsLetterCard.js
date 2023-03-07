import React from "react";
import classes from "./NewsLetterCard.module.css";
import Card from "../UI/Card";
import Link from "next/link";

export default function NewsLetterCard() {
  return (
    <Card className={classes.news_card}>
      <img
        className={classes.image}
        src="https://media.istockphoto.com/id/956366756/photo/tree-growth-three-steps-in-nature-and-beautiful-morning-lighting.jpg?s=612x612&w=0&k=20&c=0RR1skhLmMxHxbVMClJAi3XOtQ1fnfjUNusssi_3La4="
      />
      <div className={classes.text}>
        <h1 className={classes.heading}>Growing Plants and more!</h1>
        <br />
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          gravida, quam et facilisis scelerisque, leo lacus molestie mauris,
        </p>
        <Link className={classes.link} href="/Newsletter">
          Readmore..
        </Link>
      </div>
    </Card>
  );
}
