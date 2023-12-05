import { Product } from "@prisma/client";
import React from "react";
import ProductCard from "./ProductCard";

interface TrendingListProps {
  trendingProducts: Product[];
}

const TrendingList = ({ trendingProducts }: TrendingListProps) => {
  return (
    <div className="flex flex-wrap gap-7">
      {trendingProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default TrendingList;
