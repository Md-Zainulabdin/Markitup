import prismadb from "@/lib/prisma";
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

        // const user = await prismadb.admin.findMany({});
        // console.log(user);

        if (email === "test@example.com" && password === "password123") {
          return Promise.resolve({ email });
        }

        return null;
      },
    }),
  ],
};
