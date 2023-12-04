import AddProductsForm from "./_components/add-product-form";

const ProductsView = () => {
  return (
    <div className="mt-24">
      <h1 className="my-10 font-bold text-2xl">Add a Product</h1>
      <div>
        <AddProductsForm />
      </div>
    </div>
  );
};
export default ProductsView;
