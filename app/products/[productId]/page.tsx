import React from "react";
import Image from "next/image";
import { getProduct } from "@/lib/actions/get-product";
import { UseCartStore } from "@/hooks/use-cart";
import { Product } from "@prisma/client";

const ProductDescriptionPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const product = await getProduct(params.productId);
  const cart = UseCartStore();

  const handleOnAddToCart = (product: Product) => {
    cart.addProduct({ name: product.name, price: product.price, amount: 1 });
  };

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
          <div className="flex flex-col justify-between w-full break-words whitespace-pre-wrap">
            <h1 className="font-bold text-2xl overflow-hidden h-16">
              {product.name}
            </h1>
            <p className="text-sm overflow-hidden h-16">
              {product.description}
            </p>
            <h1 className="font-bold text-2xl">${product.price}</h1>
            <button
              className="btn md:w-[150px] text-sm"
              onClick={() => {
                handleOnAddToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescriptionPage;
