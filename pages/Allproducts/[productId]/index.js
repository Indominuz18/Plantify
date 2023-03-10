import Product from "@/components/Product/Product";
import React from "react";

const products = []

export default function ProductPage() {
  return (
    <>
      <Product products={products} />
    </>
  );
}
