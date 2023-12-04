"use client";

import { Search, Heart, User as UserIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import { User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

interface NavbarProps {
  currentUser: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  const router = useRouter();

  const onSignout = () => {
    signOut();
    router.refresh();
    router.push("/login");
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 px-10 bg-white bg-opacity-80">
      <nav className="text-sm py-4 flex flex-row justify-between">
        <div className="flex flex-row space-x-5 font-medium">
          <Link href="/" className="items-center flex gap-1">
            <p className="text-xl font-bold">
              Next<span className="text-[#e74c3c]">Shop</span>
            </p>
          </Link>
          <Link href="/products" className="items-center flex gap-1">
            Products
          </Link>
          <Link href="/products" className="items-center flex gap-1">
            About
          </Link>
          {currentUser && currentUser.isAdmin && (
            <Link
              href="/admin"
              className="items-center flex gap-1 bg-[#e74c3c] px-2 py-1 rounded-md text-white"
            >
              Admin Dashboard
            </Link>
          )}
        </div>
        <div className="flex space-x-5 flex-row font-medium">
          <Searchbar />
          <Search className="flex my-auto" />
          <Heart className="flex my-auto" />
          <UserIcon className="flex my-auto" />

          <Link href="/cart" className="flex my-auto">
            <ShoppingCart />
          </Link>

          {!currentUser && (
            <>
              <Link className="flex my-auto" href="/login">
                Login
              </Link>
              <Link className="flex my-auto" href="/signup">
                Signup
              </Link>
            </>
          )}
          {currentUser && (
            <button onClick={onSignout} className="flex my-auto">
              Signout
            </button>
          )}
          {currentUser && currentUser.image && (
            <Image
              className="rounded-full"
              src={currentUser.image}
              width={40}
              height={40}
              alt="user-img"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
