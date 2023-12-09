import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prisma";

// Define a type for the expected params structure
type Params = {
  params: {
    serviceId: string;
  };
};

// PATCH endpoint for updating a service
export const PATCH = async (
  request: NextRequest,
  { params }: Params 
) => {
  // Extract data from the request body
  const { heading, subHeading, description } = await request.json();

  // Check if required fields are present in the request body
  if (!heading || !subHeading || !description) {
    return new NextResponse("All fields are required!", { status: 500 });
  }

  // Check if the serviceId is present in the params
  if (!params.serviceId) {
    return new NextResponse("Service Id is required!", { status: 400 });
  }

  try {
    // Update the service in the database
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

    // Return the updated service as JSON response
    return NextResponse.json(updatedService, { status: 201 });
  } catch (error) {
    // Handle errors and log them
    console.log("SERVICE-PATCH", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};

// DELETE endpoint for deleting a service
export const DELETE = async (
  request: NextRequest,
  { params }: Params
) => {
  // Check if the serviceId is present in the params
  if (!params.serviceId) {
    return new NextResponse("Service Id is required!", { status: 400 });
  }

  try {
    // Delete the service from the database
    const deletedService = await prismadb.service.delete({
      where: {
        id: params.serviceId,
      }
    });

    // Return the deleted service as JSON response
    return NextResponse.json(deletedService, { status: 201 });
  } catch (error) {
    // Handle errors and log them
    console.log("SERVICE-DELETE", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};
