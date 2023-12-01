"use client";

import { signIn } from "next-auth/react";
import React from "react";

const SignupForm = () => {
  return (
    <form className="max-w-sm flex mx-auto flex-col mt-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl mb-10">Signup</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="border-b border-[#3a3a3a] focus:outline-none"
          id="email"
        />
        <label className="mt-5" htmlFor="email">
          Name
        </label>
        <input
          type="text"
          className="border-b border-[#3a3a3a] focus:outline-none"
          id="name"
        />
        <label htmlFor="password" className="mt-5">
          Password
        </label>
        <input
          type="password"
          className="border-b border-[#3a3a3a] focus:outline-none"
          id="password"
        />
      </div>
      <button type="submit" className="mt-10 btn">
        Login
      </button>
      <button
        type="button"
        onClick={() => {
          signIn("github");
        }}
        className="mt-10 btn"
      >
        Continue with GitHub
      </button>
    </form>
  );
};

export default SignupForm;
