import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
