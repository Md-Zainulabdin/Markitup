import prismadb from "./prisma";

export const getUserByEmail = async (email: string) => {
  const user = await prismadb.admin.findUnique({
    where: {
      email,
    },
  });

  if (!user) return null;

  return user;
};
