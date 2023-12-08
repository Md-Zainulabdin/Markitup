import React from "react";
import { getAuth } from "@/lib/auth";
import { Separator } from "@/components/ui/separator";
import UserAvatar from "../../../_components/Avatar";
import ServiceForm from "../../_components/CreateService";
import prismadb from "@/lib/prisma";

const CreateServicePage = async ({
  params,
}: {
  params: { serviceId: string };
}) => {
  const auth = await getAuth();
  const uniqueService = await prismadb.service.findUnique({
    where: {
      id: params.serviceId,
    },
  });
  return (
    <div>
      <div className="banner flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl font-semibold text-primary">
            Update Service
          </h1>
          <p className="text-md text-muted-foreground">
            Add more service in your company
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
        <ServiceForm initialData={uniqueService} />
      </div>
    </div>
  );
};

export default CreateServicePage;
