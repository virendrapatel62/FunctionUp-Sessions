import React from "react";
import ProductCard from "./ProductCard";

export default function Products(props) {
  return (
    <div className="product-wrapper">
      {props.products.map((item, index) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={`${item.name}`}
          image={"https://api.lorem.space/image/shoes?w=200&h=200&" + index}
        />
      ))}
    </div>
  );
}
