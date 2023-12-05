import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, password } = body;

    const user = await prisma.user.create({
      data: {
        name: username,
        email: email,
        hashedPassword: bcrypt.hashSync(password, 10),
      },
    });

    if (!user) {
      return new NextResponse("Something went wrong", { status: 404 });
    }

    return NextResponse.json({ username: user.name });
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
