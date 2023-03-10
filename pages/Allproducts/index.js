import React, { useEffect, useState } from "react";
import AllProducts from "@/components/AllProducts/AllProducts";
import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";

export default function Allproducts(props) {

  return <AllProducts products={props.products}/>;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(url);
  const db = client.db("Plantify");

  const productCollection = db.collection("products");

  const products = await productCollection.find().toArray();

  const final_products = products.map((product) => {
    return {
      id: product._id.toString(),
      title: product.title,
      description: product.description,
      img: product.img,
      price: product.price,
    };
  });
  client.close();
  console.log(final_products);

  return {
    props: {
      products: final_products,
    },
  };
}
