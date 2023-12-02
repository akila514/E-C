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
    <Link
      href={`products/${product.id}`}
      className="rounded-md flex flex-col w-[300px] border"
    >
      <div className="w-[300px] h-[150px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-t-md"
        />
      </div>
      <div className="flex flex-col p-2 space-y-2">
        <h1 className="font-bold text-xl">{product.name}</h1>
        <h1 className="text-xl text-[#e74c3c]">${product.price}</h1>
        <button
          className="btn text-sm"
          onClick={() => {
            handleOnAddToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
