import { Search, Heart, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="text-sm py-4 flex flex-row justify-between">
        <Link href="/" className="items-center flex gap-1">
          <p className="text-xl font-bold">
            Price<span className="text-[#e74c3c]">Tracker</span>
          </p>
        </Link>
        <div className="flex space-x-5">
          <Search />
          <Heart />
          <User />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
