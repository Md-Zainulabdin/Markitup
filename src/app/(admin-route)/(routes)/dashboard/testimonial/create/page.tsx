import React from "react";
import UserAvatar from "../../_components/Avatar";
import { Separator } from "@/components/ui/separator";
import { getAuth } from "@/lib/auth";

const TestimonialsCreatePage = async () => {
  const auth = await getAuth();
  return (
    <div>
      <div className="banner flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl font-semibold text-primary">
            Create Testimonial
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
    </div>
  );
};

export default TestimonialsCreatePage;
