import prisma from "@/lib/db";
import { getCurrentUser } from "./get-current-user";

export async function getUserWithWishlist() {
  const currentUser = await getCurrentUser();
  if (currentUser === null) {
    return null;
  }

  try {
    const UserWithFavourites = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      select: {
        userFavourites: {
          select: { product: true },
        },
      },
    });

    return UserWithFavourites?.userFavourites;
  } catch (error) {
    return null;
  }
}
