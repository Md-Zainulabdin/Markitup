import { Plus } from "lucide-react";
import UserAvatar from "../_components/Avatar";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/column";

import prismadb from "@/lib/prisma";
import { getAuth } from "@/lib/auth";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services: React.FC = async () => {
  const auth = await getAuth();
  const service = await prismadb.service.findMany({});
  return (
    <div>
      <div className="banner flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl font-semibold text-primary">Services</h1>
          <p className="text-md text-muted-foreground">
            Services we offer to our clients
          </p>
        </div>

        <div className="avatar flex items-center gap-4">
          <Link href={"/dashboard/services/create"}>
            <Button variant={"secondary"} className="text-primary">
              Create
              <Plus className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <UserAvatar url={auth?.user?.image || ""} />
        </div>
      </div>

      <div className="my-6">
        <Separator />
      </div>

      <div className="service-table">
        <div className="mt-4">
          <DataTable columns={columns} data={service} />
        </div>
      </div>
    </div>
  );
};

export default Services;
