"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UseCartStore } from "@/hooks/use-cart";
import { Product } from "@prisma/client";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cart = UseCartStore();

  const handleOnAddToCart = (product: Product) => {
    cart.addProduct({ name: product.name, price: product.price, amount: 1 });
  };

  return (
    <div className="rounded-md flex flex-col w-[250px] border">
      <div className="w-[250px] h-[150px] overflow-hidden truncate whitespace-nowrap">
        <Link href={`products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={200}
            className="rounded-t-md object-cover p-1"
          />
        </Link>
      </div>
      <div className="flex flex-col p-2 space-y-2">
        <h1 className="font-bold text-lg truncate">{product.name}</h1>
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-medium">${product.price}</h1>
          <h1 className="text-sm flex my-auto">Stock {product.quantity}</h1>
        </div>
        <hr />
        <button className="btn-secondary text-sm" onClick={() => {}}>
          Add to Wishlist
        </button>
        <button
          className="btn text-sm"
          onClick={() => {
            handleOnAddToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
