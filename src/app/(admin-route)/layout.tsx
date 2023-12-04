import { getAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const auth = await getAuth();

  if (!auth) redirect("/");
  return <>{children}</>;
};

export default AdminLayout;
