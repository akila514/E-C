import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "@/lib/db";

export const getCurrentUser = async () => {
  const session = await getServerSession(options);
  const user = session?.user;

  if (!user) {
    return null;
  }

  const availableUser = prisma?.user.findUnique({
    where: {
      email: user?.email!,
    },
  });

  if (!availableUser) {
    return null;
  }

  return availableUser;
};
