import { getCurrentUser } from "@/lib/actions/get-current-user";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw new Error("Unauthorized");
  }

  const { productId } = await req.json();

  if (!productId) {
    throw new Error("User ID is required");
  }

  const availableProduct = await prisma.user.findUnique({
    where: {
      id: currentUser.id,
    },
    select: {
      userFavourites: {
        where: {
          productId: productId,
        },
      },
    },
  });

  if (availableProduct) {
    return new NextResponse("Product already in wishlist", { status: 200 });
  }

  try {
    const product = await prisma.userFavourite.create({
      data: {
        product: {
          connect: {
            id: productId,
          },
        },
        user: {
          connect: {
            id: currentUser.id,
          },
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse("Error adding item to wishlist", { status: 500 });
  }
}
