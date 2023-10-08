import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./Cart.css";

export const CartItem = ({ data, onChange }) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const updateCart = (e) => {
    console.log(Number(e.target.value), id);
    updateCartItemCount(Number(e.target.value), id);
    onChange(price * Number(e.target.value));
  };

  const [prodPrice, setProductPrice] = useState(price);
  return (
    <div className="cartItem">
      <img src={productImage} alt="cartImage" />
      <div className="description"></div>
      <p>
        <b> {productName} </b>
      </p>
      <p> ₹ {prodPrice}.00 </p>
      <div className="countHandler">
        <button onClick={() => removeFromCart(id)}> - </button>
        <input value={cartItems[id]} onChange={(e) => updateCart(e)} />
        <button
          onClick={() => {
            addToCart(id);
            updateCart();
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
