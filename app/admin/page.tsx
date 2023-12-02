import React from "react";
import Link from "next/link";
import { getCurrentUser } from "@/lib/actions/get-current-user";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }
  return (
    <div>
      <Link href="/admin/products">Add a new product</Link>
    </div>
  );
};

export default AdminPage;
