import React, { createContext, useState } from "react";
import Products from "../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  Products.forEach((product) => {
    cart[product.id] = 0; // product objesinin `id` özelliğini anahtar olarak kullanıyoruz.
  });
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for(const item in cartItems){
  //     if (cartItems[item]> 0){
  //       let itemInfo = Products.find((product)=>product.id === Number(item))
  //       totalAmount += cartItems[item] * itemInfo.price;
  //     }
  //   }
  //   return totalAmount;
  // }
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    Object.keys(cartItems).forEach((item) => {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    });

    return totalAmount;
  };

  const emptyCart = () => {
    setCartItems({});

    console.log(cartItems);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    emptyCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
