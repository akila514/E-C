import { Product } from "@prisma/client";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex flex-wrap gap-5 md:justify-start justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
