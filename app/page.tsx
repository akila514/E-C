import getTrendingProducts from "@/lib/actions/get-trending-products";
import Searchbar from "@/components/Searchbar";
import TrendingList from "@/components/TrendingList";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Home = async () => {
  const trendingProducts = await getTrendingProducts();

  return (
    <>
      <section className="py-16 relative px-4 rounded-md md:mt-24">
        <Image
          src="/assets/img3.jpg"
          alt="hero"
          className="object-cover w-full h-full absolute top-0 left-0 -z-10 rounded-md opacity-50"
          width={100}
          height={100}
          unoptimized
        />
        <div className="flex flex-col gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex flex-row space-x-2">
              <p className="text-sm">Smart shopping starts here</p>
              <ArrowRight size={20} className="flex my-auto" />
            </div>
            <h1 className="font-bold text-3xl">
              Welcome to
              <span className="ml-2 text-[#e74c3c]">ProShop</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              aliquam impedit tempora ex enim tenetur odio?
            </p>
            <button type="submit" className="btn w-min text-sm">
              View Special Offers
            </button>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="font-bold text-2xl">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-16">Map trending items</div>
        <TrendingList trendingProducts={trendingProducts} />
      </section>
    </>
  );
};

export default Home;
