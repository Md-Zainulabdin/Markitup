import { getAuth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/user";

import UserAvatar from "../_components/Avatar";
import { Separator } from "@/components/ui/separator";
import AccountUpdateForm from "./_components/AccountUpdateForm";

const Accounts = async () => {
  const auth = await getAuth();
  const data = await getUserByEmail(auth?.user?.email || "");

  // console.log("data", auth);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="title">
          <h1 className="text-3xl inter-font font-bold text-primary">
            Your Account
          </h1>
        </div>

        <div className="avatar">
          <UserAvatar url={auth?.user?.image || ""} />
        </div>
      </div>

      <div className="my-6">
        <Separator />
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-[#222]">
          Update your profile
        </h1>
      </div>

      <div className="AccountUpdateForm mt-12">
        <AccountUpdateForm initialData={data} />
      </div>
    </div>
  );
};

export default Accounts;
