import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/Auth-Provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "MarkitUp - Content Marketing at its best",
  description: "A Content Marketing Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-[#fafafa]">
          <main>{children}</main>
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
