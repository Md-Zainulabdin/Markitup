import Link from "next/link";
import { Plus } from "lucide-react";

import UserAvatar from "../_components/Avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import prismadb from "@/lib/prisma";
import { getAuth } from "@/lib/auth";
import { columns } from "./_components/column";
import { DataTable } from "./_components/data-table";

const Portfolio: React.FC = async () => {
  const auth = await getAuth();
  const portfolio = await prismadb.portfolio.findMany({});
  return (
    <div>
      <div className="banner flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl font-semibold text-primary">Portfolios</h1>
          <p className="text-md text-muted-foreground">
            our successfull porjects which we deliverd to our client
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
          <DataTable columns={columns} data={portfolio} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;