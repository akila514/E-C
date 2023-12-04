import ProductCard from "@/components/ProductCard";
import { getUserWithWishlist } from "@/lib/actions/get-user-with-wishlist";
import React from "react";

const WishlistPage = async () => {
  const userFavourites = await getUserWithWishlist();

  return (
    <div className="mt-24 w-full">
      <h1 className="my-10 text-2xl font-bold">WishList</h1>
      <div>
        {userFavourites == null ? (
          <p>You do not have any favourites</p>
        ) : (
          <div className="flex flex-wrap gap-5 md:justify-between justify-center">
            {userFavourites.map((item) => (
              <div key={item.product.id}>
                <ProductCard product={item.product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
