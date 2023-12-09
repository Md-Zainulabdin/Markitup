import React from "react";
import { getAuth } from "@/lib/auth";
import { Separator } from "@/components/ui/separator";
import UserAvatar from "../../../_components/Avatar";
import prismadb from "@/lib/prisma";
import PortfolioForm from "../../_components/PortfolioForm";

const CreateServicePage = async ({
  params,
}: {
  params: { portfolioId: string };
}) => {
  const auth = await getAuth();
  const uniquePortfolio = await prismadb.portfolio.findUnique({
    where: {
      id: params.portfolioId,
    },
  });
  return (
    <div>
      <div className="banner flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl font-semibold text-primary">
            Update Portfolio
          </h1>
          <p className="text-md text-muted-foreground">
            Add more portfolio in your company
          </p>
        </div>

        <div className="avatar flex items-center gap-4">
          <UserAvatar url={auth?.user?.image || ""} />
        </div>
      </div>

      <div className="my-6">
        <Separator />
      </div>

      <div className="create-form">
        <PortfolioForm initialData={uniquePortfolio} />
      </div>
    </div>
  );
};

export default CreateServicePage;
