import { Product } from "@prisma/client";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productId={product.id}
          name={product.name}
          desc={product.description}
          imageUrl={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
