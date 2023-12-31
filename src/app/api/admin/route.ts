import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import prismadb from "@/lib/prisma";

export const POST = async (request: NextRequest) => {
  const { name, email, password, role, avatar } = await request.json();

  if (!name || !email || !password || !role || !avatar) {
    return new NextResponse("All feilds are required!", { status: 500 });
  }

  const hashedPassword = await hash(password, 10);

  try {
    const admin = await prismadb.admin.create({
      data: {
        name,
        email,
        role,
        avatar,
        password: hashedPassword,
      },
    });

    return NextResponse.json(admin, { status: 201 });
  } catch (error) {
    console.log("USER-POST", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};

