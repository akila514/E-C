"use client";

import React, { useState } from "react";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidAmazonProductURL = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      const hostName = parsedUrl.hostname;

      if (
        hostName.includes("www.amazon.com") ||
        hostName.includes("www.amazon.") ||
        hostName.endsWith("amazon.")
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <input
      value={searchPrompt}
      onChange={(e) => setSearchPrompt(e.target.value)}
      type="text"
      placeholder="Search Products"
      className="flex my-auto bg-transparent border p-2 rounded-md border-[#474747] focus:outline-none focus:border-[#e74c3c]"
    />
  );
};

export default Searchbar;
