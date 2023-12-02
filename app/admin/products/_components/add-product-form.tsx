"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/FileUpload";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddProductsForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const onSubmit = async (url: any) => {
    try {
      setImageUrl((prev) => url.url);
    } catch (error) {}
  };

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const product = await axios.post("/api/products", {
      name,
      desc,
      price,
      qty,
      imageUrl,
    });

    router.refresh();
  };

  return (
    <form
      className="flex flex-col max-w-md mx-auto space-y-4 mt-5"
      onSubmit={formSubmitHandler}
    >
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Product Name"
      />
      <input
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        type="text"
        placeholder="Product Description"
      />
      <FileUpload
        endpoint="imageUploader"
        onChange={(url) => {
          if (url) {
            onSubmit({ url: url });
          }
        }}
      />
      <input
        value={price}
        onChange={(e) => {
          setPrice(parseInt(e.target.value));
        }}
        type="number"
        placeholder="Product Price"
      />

      <input
        value={qty}
        onChange={(e) => {
          setQty(parseInt(e.target.value));
        }}
        type="number"
        placeholder="Product Quantity"
      />
      <button type="submit" value="Add Product>">
        Add Product
      </button>
    </form>
  );
};

export default AddProductsForm;
