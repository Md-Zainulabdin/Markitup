import prismadb from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { heading, subHeading, description } = await request.json();

    if (!heading || !subHeading || !description) {
      return new NextResponse("All feilds are required!", { status: 500 });
    }

    const service = await prismadb.service.create({
      data: {
        heading,
        subHeading,
        description,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.log("SERVICE-POST", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};
