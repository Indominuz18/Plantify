import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { MongoClient } from "mongodb";
import React from "react";
const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";

// const DUMMY_DATA = [
//   {
//     title: "Growing Plants and more!",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida, quam et facilisis scelerisque, leo lacus molestie mauris,",
//     img: "https://media.istockphoto.com/id/956366756/photo/tree-growth-three-steps-in-nature-and-beautiful-morning-lighting.jpg?s=612x612&w=0&k=20&c=0RR1skhLmMxHxbVMClJAi3XOtQ1fnfjUNusssi_3La4=",
//   },
// ];

export default function Newsletter(props) {
  return <NewsLetter news={props.news} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(url);
  const db = client.db("Plantify");

  const newsCollection = db.collection("news");

  const news = await newsCollection.find().toArray();
  console.log(news)
  const final_news = news.map((item) => {
    return {
      id: item._id.toString(),
      title: item.title,
      description: item.description,
      img: item.img,
    };
  });

  client.close();
  // console.log(final_news);

  return {
    props: {
      news: final_news,
    },
  };
}
