"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FileUpload } from "@/components/FileUpload";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  productName: z.string().min(2).max(20),
  price: z.coerce.number().min(0).max(10000),
  quantity: z.coerce.number().min(1).max(100),
  description: z.string().min(2).max(20),
});

const AddProduct = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      quantity: 0,
      price: 0,
      description: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      await axios.post("/api/products", {
        name: values.productName,
        desc: values.description,
        price: values.price,
        qty: values.quantity,
        imageUrl,
      });
      (values.productName = ""), (values.description = ""), (values.price = 0);
      values.quantity = 0;

      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const [imageUrl, setImageUrl] = useState("");

  const onImageSubmit = async (url: any) => {
    try {
      setImageUrl((prev) => url.url);
    } catch (error) {}
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-8 md:space-y-0 md:gap-4 grid grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Product name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the name that will display on the product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Product price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter product price"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the price that will display on the product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Product description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter product description"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the description that will display on the product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Product quantity</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter product quantity"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the quantity that will display on the product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FileUpload
              endpoint="imageUploader"
              onChange={(url) => {
                if (url) {
                  onImageSubmit({ url: url });
                }
              }}
            />
          </div>
          <Button disabled={isLoading} type="submit" className="mt-5">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddProduct;
