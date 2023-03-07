import React from "react";
import AllProducts from "@/components/AllProducts/AllProducts";
import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";

export default function Allproducts(props) {
  return <AllProducts products={props.products} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(url);
  const db = client.db();

  const productCollection = db.collection("products");

  const products = await productCollection.find().toArray();

  // const final_products = JSON.stringify(products).toArray()

  const final_products = products.map((product) => {
    return {
      id: product._id.toString(),
      title: product.title,
      description: product.description,
      img: product.img,
      price: product.price,
    };
  });

  console.log(final_products);

  return {
    props: final_products,
    revalidate: 1,
  };
}
