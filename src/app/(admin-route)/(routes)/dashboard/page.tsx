import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import React from "react";
import UserAvatar from "./_components/Avatar";
import { Separator } from "@/components/ui/separator";

const Dashboard: React.FC = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl inter-font font-bold text-primary">
            Dashboard
          </h1>
        </div>

        <div className="avatar">
          <UserAvatar url={session?.user?.image || ""} />
        </div>
      </div>

      <div className="my-6">
        <Separator />
      </div>

      <div className="greeting">
        <h1>Hey</h1>
        <h2>{session?.user?.name}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
