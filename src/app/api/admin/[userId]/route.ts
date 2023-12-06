import { NextRequest, NextResponse } from "next/server";

import { hash } from "bcrypt";
import prismadb from "@/lib/prisma";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const { name, email, password, avatar } = await request.json();

    if (!name || !email || !password || !avatar) {
      return new NextResponse("All feilds are required!", { status: 500 });
    }

    if (!params.userId) {
      return new NextResponse("User id s required", { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const updatedUser = await prismadb.admin.update({
      where: {
        id: params.userId,
      },
      data: {
        name,
        email,
        password: hashedPassword,
        avatar,
      },
    });

    return NextResponse.json(updatedUser, { status: 201 });
  } catch (error) {
    console.log("USER-PATCH", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};
