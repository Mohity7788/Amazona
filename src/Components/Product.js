import React from "react";
import Rating from "./Rating";

function Product(props) {
  return (
    <div class="card">
      <a href="/product">
        <img
          class="medium"
          src={props.product.image}
          alt={props.product.name}
        />
      </a>
      <div class="card-body">
        <a href="product.html">
          <h2>{props.product.name}</h2>
        </a>
        <Rating
          rating={props.product.rating}
          numReview={props.product.numReview}
        />
        <div class="price"> ${props.product.price}</div>
      </div>
    </div>
  );
}

export default Product;
