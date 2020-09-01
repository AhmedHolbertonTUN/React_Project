import React from "react";
import "./style_product.css";

export default function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Denim Jeans" />
      <h2>{props.title}</h2>
      <p className="price">${props.price}</p>
      <p>{props.text}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}
