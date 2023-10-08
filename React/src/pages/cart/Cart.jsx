import React, { useContext, useState } from "react";
import Products from "../../Products";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, emptyCart } = useContext(ShopContext);
  const [totalAmount, setTotalAmount] = useState(getTotalCartAmount());
  const navigate = useNavigate();
  const update = (data) => {
    console.log("update", data);
    setTotalAmount(data);
  };
  const checkOut = async () => {
    // make a post request to backend to send the product id, quantity and user id from the cookies and then empty the cart
    console.log(cartItems);
    if (Cookies.get("id") == 0 || Cookies.get("id") == "undefined") {
      alert("Please Login to place order");
      navigate("/login");
    } else {
      let user_id = Cookies.get("id");
      console.log(user_id);
      if (window.confirm("Do you want to place an order?") == true) {
        const updateProduct = new Promise(async (resolve, reject) => {
          const updateCart = await axios.post(
            "http://localhost:3002/checkout",
            {
              user_id,
              cartItems,
              totalAmount,
            }
          );
          if (updateCart.data.message) {
            resolve(true);
            emptyCart();
            setTotalAmount(0);
          } else {
            reject(false);
          }
        });
        alert("Order Placed Successfully");
        navigate("/");
        //if (updateProduct) return console.log("Successs");

        return console.log("Failed");
        //empty the cart
        // setCartItems({});

        // navigate to the home page
      } else {
        alert("Order Cancelled");
      }
    }
  };
  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items </h1>
      </div>
      <br />
      <div className="cart-page">
        <div className="cartItems">
          {/* {Products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }

          }
          )
          } */}
          {!totalAmount ? (
            <div></div>
          ) : (
            Products.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} onChange={update} />;
              } else {
                return null; // You can also use an empty <div> here if needed
              }
            })
          )}
        </div>
        <div className="checkout">
          {totalAmount > 0 ? (
            <>
              <p className="subtotal">Subtotal: ₹ {totalAmount}.00</p>
              <div className="checkout-buttons-container">
                <button
                  className="shopping-button"
                  onClick={() => navigate("/")}
                >
                  CONTINUE SHOPPING
                </button>
                <button className="checkout-button" onClick={() => checkOut()}>
                  CHECK OUT
                </button>
              </div>
            </>
          ) : (
            <>
              <h1>Your Cart is Empty</h1>
              <button className="shopping-button" onClick={() => navigate("/")}>
                SHOP NOW
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
