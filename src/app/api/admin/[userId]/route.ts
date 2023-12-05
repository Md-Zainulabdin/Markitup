import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import prismadb from "@/lib/prisma";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { userId: string } }
) => {
  const { name, email, password, avatar } = await request.json();

  if (!name || !email || !password || !avatar) {
    return new NextResponse("All feilds are required!", { status: 500 });
  }

  const hashedPassword = await hash(password, 10);

  try {
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
