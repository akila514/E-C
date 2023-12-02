"use client";

import React, { useEffect } from "react";
import { UseCartStore } from "@/hooks/use-cart";
import CartCard from "./cart-card";

const CartList = () => {
  const cart = UseCartStore();
  const cartItems = cart.cartItems;

  return (
    <>
      <div>
        <div className="border w-full rounded-md justify-between flex flex-row p-4 my-5">
          <p className="flex my-auto">
            Total Amount : $
            {cartItems.reduce((acc, cur) => acc + cur.amount * cur.price, 0)}
          </p>
          <button className="btn text-sm">Proceed to Checkout</button>
        </div>
      </div>
      <div className="space-y-2">
        {cartItems.length > 0 && (
          <>
            {cartItems.map((item) => (
              <CartCard cartItem={item} key={item.name} />
            ))}
          </>
        )}
        {cartItems.length == 0 && <p>No items in the cart</p>}
      </div>
    </>
  );
};

export default CartList;
