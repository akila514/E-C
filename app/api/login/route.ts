import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body;

    const availableUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!availableUser) {
      return new NextResponse("Email or password is wrong", { status: 404 });
    }

    const isPasswordValid = bcrypt.compareSync(
      password,
      availableUser.hashedPassword!
    );

    if (!isPasswordValid) {
      return new NextResponse("Email or password is wrong", { status: 404 });
    }

    return NextResponse.json({ username: availableUser.name });
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
