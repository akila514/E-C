"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { signIn } from "next-auth/react";
import GitHubLoginButton from "@/components/github-login-button";
import GoogleLoginButton from "@/components/google-login-button";
import axios from "axios";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
});

export function SignupForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const user = await axios.post("/api/signup", {
      username: values.username,
      email: values.email,
      password: values.password,
    });

    if (!user) {
      console.log("error");
    } else {
      router.push("/");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 justify-center items-center flex flex-col"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className="w-[400px]"
                  placeholder="Enter your username"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Your username must contain at least 2 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="w-[400px]"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="w-[400px]"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Your password must contain at least 5 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-auto md:w-[400px] btn" type="submit">
          Submit
        </Button>
      </form>
      <div className="flex flex-col space-y-2 mx-auto justify-center items-center mt-2">
        <GitHubLoginButton />
        <GoogleLoginButton />
      </div>
    </Form>
  );
}
