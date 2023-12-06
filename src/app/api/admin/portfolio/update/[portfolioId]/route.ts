import prismadb from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { portfolioId: string } }
) => {
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

    if (!params.portfolioId) {
      return new NextResponse("Portfolio id is required!", { status: 400 });
    }

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

    return NextResponse.json(updatedPortfolio, { status: 201 });
  } catch (error) {
    console.log("PORTFOLIO-PATCH", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
};
