import React from "react";
import Products from "../../Products";
import Product from "./Product";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop" key="shop">
      <div className="shopTitle" key="shopTitle">
        <h1>Shop</h1>
      </div>
      <div className="products" key="products">
        {""}
        {Products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
