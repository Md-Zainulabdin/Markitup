import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="px-[20px] md:px-[50px] py-[30px]">{children}</main>
    </>
  );
};

export default RootLayout;
