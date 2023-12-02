import { getCurrentUser } from "@/lib/actions/get-current-user";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw new Error("Unauthorized");
  }

  const body = await req.json();
  const { name, desc, price, qty, imageUrl } = body;

  const product = await prisma.product.create({
    data: {
      name: name,
      description: desc,
      price: price,
      quantity: qty,
      image: imageUrl,
    },
  });

  if (!product) {
    throw new Error("Error creating product");
  }

  return NextResponse.json(product, { status: 201 });
}
