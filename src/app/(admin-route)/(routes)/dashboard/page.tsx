import { getAuth } from "@/lib/auth";
import UserAvatar from "./_components/Avatar";
import { Separator } from "@/components/ui/separator";

const Dashboard: React.FC = async () => {
  const auth = await getAuth();
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl inter-font font-bold text-primary">
            Dashboard
          </h1>
        </div>

        <div className="avatar">
          <UserAvatar url={auth?.user?.image || ""} />
        </div>
      </div>

      <div className="my-6">
        <Separator />
      </div>

      <div className="greeting flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-[#333]">
          Welcome, {auth?.user?.name}
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
