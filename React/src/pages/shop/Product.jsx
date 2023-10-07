import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product" key={id} id={id}>
      <img
        src={process.env.PUBLIC_URL + "/assets/" + productImage}
        //src={productImage}
        alt="imageLogo"
      />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₹ {price}.00</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> +{cartItemAmount} </>}{" "}
      </button>
    </div>
  );
};

export default Product;
