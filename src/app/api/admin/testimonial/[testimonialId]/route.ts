import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prisma";

// Define a type for the expected params structure
type Params = {
  params: {
    testimonialId: string;
  };
};

// PATCH endpoint for updating a service
export const PATCH = async (
  request: NextRequest,
  { params }: Params 
) => {
  // Extract data from the request body
  const { clientName, clientDescription, review, profileImage } = await request.json();

  if (!clientName || !clientDescription || !review || !profileImage) {
    return new NextResponse("All feilds are required!", { status: 500 });

  }

  // Check if the testimonialId is present in the params
  if (!params.testimonialId) {
    return new NextResponse("testimonial Id is required!", { status: 400 });
  }

  try {
    // Update the testimonial in the database
    const updatedTestimonial = await prismadb.testimonial.update({
      where: {
        id: params.testimonialId,
      },
      data: {
        clientName, clientDescription, review, profileImage
      },
    });

    // Return the updated testimonial as JSON response
    return NextResponse.json(updatedTestimonial, { status: 201 });
  } catch (error) {
    // Handle errors and log them
    console.log("TESTIMONIAL-PATCH", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};

// DELETE endpoint for deleting a testimonial
export const DELETE = async (
  request: NextRequest,
  { params }: Params
) => {
  // Check if the testimonialId is present in the params
  if (!params.testimonialId) {
    return new NextResponse("testimonial Id is required!", { status: 400 });
  }

  try {
    // Delete the testimonial from the database
    const testimonial = await prismadb.testimonial.delete({
      where: {
        id: params.testimonialId,
      }
    });

    // Return the deleted testimonial as JSON response
    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    // Handle errors and log them
    console.log("TESTIMONIAL-DELETE", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};
