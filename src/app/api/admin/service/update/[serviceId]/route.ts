import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prisma";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) => {
  const { heading, subHeading, description } = await request.json();

  if (!heading || !subHeading || !description) {
    return new NextResponse("All feilds are required!", { status: 500 });
  }

  if (!params.serviceId) {
    return new NextResponse("Service Id is required!", { status: 400 });
  }
  try {
    const updatedService = await prismadb.service.update({
      where: {
        id: params.serviceId,
      },
      data: {
        heading,
        subHeading,
        description,
      },
    });
    return NextResponse.json(updatedService, { status: 201 });
  } catch (error) {
    console.log("USER-PATCH", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};
