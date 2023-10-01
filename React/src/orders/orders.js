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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Orders</h2>
      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.order_id} className="order-card">
            <h3>Order ID: {order.order_id}</h3>
            <p>productName: {order.productName}</p>
            <p> order time: {order.order_time}</p>
            <p>price : {order.price}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
