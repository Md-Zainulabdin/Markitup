import prismadb from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { clientName, clientDescription, review, profileImage } = await request.json();

    if (!clientName || !clientDescription || !review || !profileImage) {
      return new NextResponse("All feilds are required!", { status: 500 });

    }

    const testimonial = await prismadb.testimonial.create({
      data: {
        clientName,
        clientDescription,
        review,
        profileImage
      },
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.log("TESTIMONIAL-POST", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};
