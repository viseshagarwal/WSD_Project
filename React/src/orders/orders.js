// Write the code of the Orders component here and query the orders from the backend.
// frontend/Orders.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

let user_id = Cookies.get("id");
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend API
    axios
      .get("http://localhost:3002/Orders", {
        params: {
          variableName: user_id,
        },
      })
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div>
      {/* <h2>Orders</h2>
      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.order_id} className="order-card">
            <h3>Order ID: {order.order_id}</h3>
            <p>productName: {order.productName}</p>
            <p> order time: {order.order_time}</p>
            <p>price : {order.price}</p>
           
          </div>
        ))}
      </div> */}
      <div class="feature">
        <div class="container">
          <div class="card">
            <br />
            <h1 class="card-header">Orders</h1>
            <div class="card-body">
              {orders.map((order) => (
                <div key={order.order_id} className="order-card">
                  <h3>Order ID: {order.order_id} </h3>
                  <h5>Name: {order.productName}</h5>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/" + order.productImage
                    }
                    style={{ height: "200px" }}
                    alt="productImage"
                  />
                  <p> order time: {order.order_time}</p>
                  <p>price : {order.price}</p>
                  <hr style={{ textAlign: "left", marginLeft: "0" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
