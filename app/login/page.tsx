import React from "react";
import { LoginForm } from "./_components/login-form";
import { getCurrentUser } from "@/lib/actions/get-current-user";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    redirect("/");
  }

  return (
    <div className="mt-24 mb-10">
      <h1 className="text-2xl font-bold my-10 text-center">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
