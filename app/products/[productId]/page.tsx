import React from "react";
import Image from "next/image";
import { getProduct } from "@/lib/actions/get-product";

const ProductDescriptionPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const product = await getProduct(params.productId);

  return (
    <div className="w-full flex flex-col mt-10">
      {product && (
        <div className="w-full flex flow-row space-x-5 md:space-x-10">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
          />
          <div className="flex flex-col justify-between">
            <h1 className="font-bold text-2xl">{product.name}</h1>
            <p className="text-sm">{product.description}</p>
            <h1 className="font-bold text-2xl">${product.price}</h1>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescriptionPage;
