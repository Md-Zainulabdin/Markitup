import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";

export const getAuth = async () => {
  const session = await getServerSession(options);
  return session;
};
