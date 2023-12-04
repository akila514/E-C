"use client";

import { UseCartStore } from "@/hooks/use-cart";
import { Product } from "@prisma/client";
import React from "react";

interface AddToCartProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartProps) => {
  const cart = UseCartStore();

  const handleOnAddToCart = (product: Product) => {
    cart.addProduct({
      name: product.name,
      price: product.price,
      amount: 1,
      productId: product.id,
    });
  };
  return (
    <button
      className="btn text-sm"
      onClick={() => {
        handleOnAddToCart(product);
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
