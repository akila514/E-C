"use client";

import { CartItem, UseCartStore } from "@/hooks/use-cart";
import React from "react";

interface CartCardProps {
  cartItem: CartItem;
}

const CartCard = ({ cartItem }: CartCardProps) => {
  const cart = UseCartStore();

  const removeCartItemHandler = () => {
    cart.removeProduct(cartItem.productId);
  };

  return (
    <div className="w-full p-4 rounded-md border flex flex-row justify-between">
      <div className="w-1/2">
        <h1 className="font-bold">{cartItem.name}</h1>
        <h1 className="text-[#e74c3c]">
          ${cartItem.price} x {cartItem.amount}
        </h1>
      </div>
      <div className="w-1/2 flex flex-row justify-end items-end space-x-4">
        <h1 className="flex my-auto text-lg font-bold">
          $ {cartItem.price * cartItem.amount}
        </h1>
        <button
          onClick={removeCartItemHandler}
          className="btn text-sm flex my-auto"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
