import React, { useEffect, useState } from "react";
import AllProducts from "@/components/AllProducts/AllProducts";
// import { MongoClient } from "mongodb";
// import { getAllProducts } from "../api/hello";

// const url =
//   "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";

export default function Allproducts(props) {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const final_products = await fetch("../api/hello");

  //     console.log(final_products);

  //     setProducts(final_products);
  //   }
  //   fetchData();
  // });

  return <AllProducts />;
}
