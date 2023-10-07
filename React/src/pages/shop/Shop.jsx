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
      {/* <div className="shopTitle" key="shopTitle">
        <h2>Shop</h2>
        <button id="seach" type="button">HJ</button>
      </div> */}
      <div id="inter">
        <nav class="navbar mt-3 mb-3">
          <div class="container-fluid">
            <a class="navbar-brand">Shop Now</a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
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
