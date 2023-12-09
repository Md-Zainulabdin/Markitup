import React from "react";
import AdminNav from "./dashboard/_components/AdminNav";

const AdminRouteLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="w-full flex flex-row">
        <nav className="w-72 h-screen fixed inset-y-0 z-50 hidden lg:flex border bg-white">
          <AdminNav />
        </nav>
        <main className="w-full lg:pl-72 px-4 pt-4">
          <div className="mx-auto p-2 md:p-6">{children}</div>
        </main>
      </div>
    </>
  );
};

export default AdminRouteLayout;
