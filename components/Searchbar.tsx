"use client";

import React from "react";

const Searchbar = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        className="bg-transparent border p-2 rounded-md border-[#252525] focus:outline-none focus:border-[#e74c3c]"
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
