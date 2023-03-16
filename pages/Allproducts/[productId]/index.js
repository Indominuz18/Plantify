import Product from "@/components/Product/Product";
import { MongoClient, ObjectId } from "mongodb";
import React from "react";

const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";

export default function ProductPage(props) {
  return (
    <>
      <Product product={props.productData} />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(url);
  const db = client.db("Plantify");
  const productCollection = db.collection("products");
  const products = await productCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: products.map((item) => {
      return {
        params: {
          productId: item._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context){
  const productId = context.params.productId;
  const searchId = new ObjectId(productId);
  const client = await MongoClient.connect(url)
  const db = client.db("Plantify")
  const productCollection = db.collection("products")
  const product = await productCollection.findOne({_id: searchId})
  client.close()

  
  return {
    props: {
      productData: {
        id: product._id.toString(),
        title: product.title,
        description: product.description,
        img: product.img,
        price: product.price
      }
    }
  }
}