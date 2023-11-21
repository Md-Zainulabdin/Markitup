import prismadb from "@/lib/prisma";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface MyCredentials {
  email: string;
  password: string;
}

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        const { email, password } = credentials as unknown as MyCredentials;

        const user = await prismadb.admin.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          throw new Error("User not found!");
        }

        const isMatched = await compare(password, user?.password);

        if (!isMatched) {
          throw new Error("Password not Matched!");
        }

        return {
          ...user,
          image: user?.avatar,
        };
      },
    }),
  ],
};
