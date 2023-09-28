import React, { useContext } from "react";
import Products from "../../Products";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items </h1>
      </div>
      <div className="cart-page">
        <div className="cartItems">
          {/* {Products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }

          }
          )
          } */}
          {Products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            } else {
              return null; // You can also use an empty <div> here if needed
            }
          })}
        </div>
        <div className="checkout">
          {totalAmount > 0 ? (
            <>
              <p className="subtotal">Subtotal: ${totalAmount}</p>
              <div className="checkout-buttons-container">
                <button
                  className="shopping-button"
                  onClick={() => navigate("/")}
                >
                  CONTINUE SHOPPING
                </button>
                <button className="checkout-button">CHECK OUT</button>
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
