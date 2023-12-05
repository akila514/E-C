import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
  return (
    <button
      className="flex flex-row w-[400px] rounded-md bg-gray-100 hover:bg-gray-200 duration-150 transition border border-black/20"
      onClick={() => {
        signIn("google");
      }}
    >
      <Image
        className="rounded-l-md"
        src="/assets/google.png"
        alt="googleImage"
        width={40}
        height={40}
      />
      <p className="flex my-auto mx-auto text-sm font-medium">
        Continue with Google
      </p>
    </button>
  );
};

export default GoogleLoginButton;
