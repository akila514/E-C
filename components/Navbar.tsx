import { Search, Heart, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="text-sm py-4 flex flex-row justify-between">
        <div className="flex flex-row space-x-5 font-medium">
          <Link href="/" className="items-center flex gap-1">
            <p className="text-xl font-bold">
              Price<span className="text-[#e74c3c]">Tracker</span>
            </p>
          </Link>
          <Link href="/products" className="items-center flex gap-1">
            Products
          </Link>
          <Link href="/products" className="items-center flex gap-1">
            About
          </Link>
        </div>
        <div className="flex space-x-5 flex-row font-medium">
          <Searchbar />
          <Search className="flex my-auto" />
          <Heart className="flex my-auto" />
          <User className="flex my-auto" />
          <Link className="flex my-auto" href="/login">
            Login
          </Link>
          <Link className="flex my-auto" href="/signup">
            SignUp
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
