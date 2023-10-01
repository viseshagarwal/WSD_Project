import React, { useState, useEffect } from "react";
//import Products from "../../Products";
import Product from "./Product";
import axios from "axios";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/products");
        setProducts(response.data); // Assuming the data is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div className="shop" key="shop">
      <div className="shopTitle" key="shopTitle">
        <h1>Shop</h1>
      </div>
      <div className="products" key="products">
        {products.map((product, index) => (
          <Product data={product} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Shop;
