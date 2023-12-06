import prismadb from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { title, description, imageUrl, category, projectLink } =
      await request.json();

    if (
      !title ||
      !description ||
      !description ||
      !imageUrl ||
      !category ||
      !projectLink
    ) {
      return new NextResponse("All feilds are required!", { status: 500 });
    }

    const service = await prismadb.portfolio.create({
      data: {
        title,
        description,
        imageUrl,
        category,
        projectLink,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.log("SERVICE-POST", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};
