import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.products);

  return <div>{JSON.stringify(products, null, 2)}</div>;
}
