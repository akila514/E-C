import React from "react";
import { SignupForm } from "./_components/signup-form";
import { getCurrentUser } from "@/lib/actions/get-current-user";
import { redirect } from "next/navigation";

const SignupPage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    redirect("/");
  }

  return (
    <div className="mt-24 mb-10">
      <h1 className="text-2xl font-bold my-10 text-center">Login</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
