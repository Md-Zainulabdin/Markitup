import React from "react";
import UserAvatar from "../_components/Avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAuth } from "@/lib/auth";
import { Plus } from "lucide-react";

const TestimonialPage: React.FC = async () => {
  const auth = await getAuth();
  return (
    <div>
      <div className="banner flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl font-semibold text-primary">Testimonials</h1>
          <p className="text-md text-muted-foreground">
          WHAT Customers Say
          </p>
        </div>

        <div className="avatar flex items-center gap-4">
          <Link href={"/dashboard/testimonial/create"}>
            <Button variant={"secondary"} className="text-primary">
              Create
              <Plus className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <UserAvatar url={auth?.user?.image || ""} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
