import NewsLetterPage from "@/components/NewsLetter/NewsLetterPage";
import { MongoClient, ObjectId } from "mongodb";
import React from "react";
const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";

export default function NewsletterDetail(props) {
  const data = props.newsData;

  return <NewsLetterPage newsData={data} />;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(url);

  const db = client.db("Plantify");
  const newsCollection = db.collection("news");

  const news = await newsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: news.map((item) => {
      return {
        params: {
          newsId: item._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const newsId = context.params.newsId;
  const searchId = new ObjectId(newsId)
  const client = await MongoClient.connect(url);
  const db = client.db("Plantify");

  const newsCollection = db.collection("news");

  const news = await newsCollection.findOne({ _id: searchId });
  console.log(news)

  client.close();

  return {
    props: {
      newsData: {
        id: news._id.toString(),
        title: news.title,
        description: news.description,
        img: news.img,
      },
    },
  };
}
