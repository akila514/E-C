import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  productId: string;
  name: string;
  desc: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({
  productId,
  name,
  desc,
  price,
  imageUrl,
}: ProductCardProps) => {
  return (
    <Link
      href={`products/${productId}`}
      className="rounded-md flex flex-col w-[300px] border"
    >
      <div className="w-[300px] h-[150px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="rounded-t-md"
        />
      </div>
      <div className="flex flex-col p-2 space-y-2">
        <h1 className="font-bold text-xl">{name}</h1>
        <h1 className="text-xl text-[#e74c3c]">${price}</h1>
        <button className="btn text-sm">Add to Cart</button>
      </div>
    </Link>
  );
};

export default ProductCard;
