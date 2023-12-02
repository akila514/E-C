"use client";

import { CartItem } from "@/hooks/use-cart";
import React from "react";
import { UseCartStore } from "@/hooks/use-cart";

const CartList = () => {
  const cart = UseCartStore();
  const cartItems = cart.cartItems;
  return (
    <div>
      {cartItems.length > 0 && (
        <>
          {cartItems.map((item) => (
            <div key={item.name}>{item.name}</div>
          ))}
        </>
      )}
      {cartItems.length == 0 && <p>No items in the cart</p>}
    </div>
  );
};

export default CartList;
