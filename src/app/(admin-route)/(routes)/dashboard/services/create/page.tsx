import React from "react";
import UserAvatar from "../../_components/Avatar";
import { getAuth } from "@/lib/auth";
import { Separator } from "@/components/ui/separator";
import ServiceForm from "../_components/ServiceForm";

const CreateServicePage: React.FC = async () => {
  const auth = await getAuth();
  return (
    <div>
      <div className="banner flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl font-semibold text-primary">
            Create Services
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
        <ServiceForm />
      </div>
    </div>
  );
};

export default CreateServicePage;
