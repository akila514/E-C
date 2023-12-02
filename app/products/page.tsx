import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/actions/get-products";
import React from "react";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-2xl font-bold my-10">All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
