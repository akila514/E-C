import React from "react";
import Link from "next/link";
import { getCurrentUser } from "@/lib/actions/get-current-user";
import { redirect } from "next/navigation";
import AdminCard from "./_components/admin-card";

const AdminPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }
  return (
    <div className="mt-24">
      <h1 className="text-2xl my-10 font-bold">Admin Dashboard</h1>
      <div className="flex flex-wrap gap-5 items-center justify-between">
        <AdminCard
          title="Add Product"
          description="Add a new product to nextShop"
          image="/assets/add.png"
          link="/admin/products"
        />
        <AdminCard
          title="Update Product"
          description="Update an existing product in nextShop"
          image="/assets/update.png"
          link="/admin/products"
        />
        <AdminCard
          title="Add a Admin"
          description="Add an admin user to nextShop"
          image="/assets/admin.png"
          link="/admin/products"
        />
        <AdminCard
          title="Update Users"
          description="Update signed in Users in nextShop"
          image="/assets/users.jpg"
          link="/admin/products"
        />
      </div>
    </div>
  );
};

export default AdminPage;
