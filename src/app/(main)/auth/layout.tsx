import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(options);

  if (session) redirect("/");
  return <>{children}</>;
};

export default AuthLayout;
