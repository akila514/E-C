"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UseCartStore } from "@/hooks/use-cart";
import { Product } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cart = UseCartStore();
  const router = useRouter();

  const handleOnAddToCart = (product: Product) => {
    cart.addProduct({
      name: product.name,
      price: product.price,
      amount: 1,
      productId: product.id,
    });
  };

  const handleOnAddToWishlist = async (product: Product) => {
    await axios.post("/api/wishlist", { productId: product.id });
    router.refresh();
  };

  return (
    <div className="rounded-md flex flex-col w-[225px] outline outline-gray-100 mx-auto md:mx-0">
      <div className="w-[225px] h-[150px] overflow-hidden truncate whitespace-nowrap">
        <Link href={`products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={225}
            height={200}
            className="rounded-t-md object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col p-2 space-y-2">
        <h1 className="font-bold truncate">{product.name}</h1>
        <div className="flex flex-row justify-between">
          <h1 className="font-medium">${product.price}</h1>
          <h1 className="text-sm flex my-auto">Stock {product.quantity}</h1>
        </div>
        <hr />
        <button
          className="btn-secondary text-sm"
          onClick={() => {
            handleOnAddToWishlist(product);
          }}
        >
          Add to Wishlist
        </button>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
