import prismadb from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Define a type for the expected params structure
type Params = {
  params: {
    portfolioId: string;
  };
};

// PATCH endpoint for updating a portfolio entry
export const PATCH = async (
  request: NextRequest,
  { params }: Params
) => {
  try {
    // Extract data from the request body
    const { title, description, imageUrl, category, projectLink } =
      await request.json();

    // Check if all required fields are present in the request body
    if (
      !title ||
      !description ||
      !imageUrl ||
      !category ||
      !projectLink
    ) {
      return new NextResponse("All fields are required!", { status: 500 });
    }

    // Check if the portfolioId is present in the params
    if (!params.portfolioId) {
      return new NextResponse("Portfolio id is required!", { status: 400 });
    }

    // Update the portfolio entry in the database
    const updatedPortfolio = await prismadb.portfolio.update({
      where: { id: params.portfolioId },
      data: {
        title,
        description,
        imageUrl,
        category,
        projectLink,
      },
    });

    // Return the updated portfolio entry as a JSON response
    return NextResponse.json(updatedPortfolio, { status: 201 });
  } catch (error) {
    // Handle errors and log them
    console.log("PORTFOLIO-PATCH", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};

// DELETE endpoint for deleting a portfolio entry
export const DELETE = async (
  request: NextRequest,
  { params }: Params
) => {
  try {
    // Check if the portfolioId is present in the params
    if (!params.portfolioId) {
      return new NextResponse("Portfolio id is required!", { status: 400 });
    }

    // Delete the portfolio entry from the database
    const deletedPortfolio = await prismadb.portfolio.delete({
      where: { id: params.portfolioId },
    });

    // Return the deleted portfolio entry as a JSON response
    return NextResponse.json(deletedPortfolio, { status: 201 });
  } catch (error) {
    // Handle errors and log them
    console.log("PORTFOLIO-DELETE", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};
