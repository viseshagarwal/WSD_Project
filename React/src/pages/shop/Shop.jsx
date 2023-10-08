// import React, { useState, useEffect } from "react";
// //import Products from "../../Products";
// import Product from "./Product";
// import axios from "axios";
// import "./Shop.css";

// const Shop = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3002/products");
//         setProducts(response.data); // Assuming the data is an array of products
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to fetch data only once on component mount

//   return (
//     <div className="shop" key="shop">
//       {/* <div className="shopTitle" key="shopTitle">
//         <h2>Shop</h2>
//         <button id="seach" type="button">HJ</button>
//       </div> */}
//       <div id="inter">
//         <nav class="navbar mt-3 mb-3">
//           <div class="container-fluid">
//             <a class="navbar-brand">Shop Now</a>
//             <form class="d-flex" role="search">
//               <input
//                 class="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button class="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </nav>
//       </div>

//       <div className="products" key="products">
//         {products.map((product, index) => (
//           <Product data={product} />
//         ))}
//         ;
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // Function to fetch products from the specified API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3002/products");

      if (response.status === 200) {
        const productsData = response.data;
        setProducts(productsData);
      } else {
        console.error("Error fetching data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  // Event handler for input changes
  const handleInputChange = async (event) => {
    const keyword = event.target.value.toLowerCase().trim();
    try {
      const response = await axios.get("http://localhost:3002/products");
      if (response.status === 200) {
        const productsData = response.data;

        if (!Array.isArray(productsData)) {
          console.error("Error: Data is not in the expected format.");
          return;
        }

        const filteredProducts = productsData.filter((product) => {
          const productName = product.productName || "";

          return productName.toLowerCase().includes(keyword);
        });

        setProducts(filteredProducts);
      } else {
        console.error("Error fetching data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="shop" key="shop">
      <div id="inter">
        <nav className="navbar mt-3 mb-3">
          <div className="container-fluid">
            <a className="navbar-brand">Shop Now</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="searchInput"
                onChange={handleInputChange}
              />
            </form>
          </div>
        </nav>
      </div>

      <div className="products" key="products">
        {products.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
