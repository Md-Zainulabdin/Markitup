"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdOutlineHome } from "react-icons/md";
import { ActivitySquare, Combine, UserCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const AdminNav = () => {
  const pathname = usePathname();
  const { data } = useSession();

  const links = [
    {
      icon: <MdOutlineHome size={28} />,
      herf: "/dashboard",
      label: "Home",
    },
    {
      icon: <UserCircle />,
      herf: "/dashboard/accounts",
      label: "Account",
    },
    {
      icon: <Combine />,
      herf: "/dashboard/services",
      label: "Services",
    },
    {
      icon: <ActivitySquare />,
      herf: "/dashboard/portfolio",
      label: "Porfolio",
    },
  ];

  return (
    <div className="w-full h-full p-8 relative">
      <div className="w-full flex flex-col">
        <div className="logo">
          <Link href={"/"}>
            {" "}
            <Image
              src={`/images/logo.png`}
              alt="Dashboard Logo"
              width={180}
              height={150}
            />
          </Link>
        </div>

        <div className="py-10">
          <Separator />
        </div>

        <div className="menu-links mt-6 flex flex-col gap-6">
          {links.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                pathname === item.herf
                  ? "text-primary"
                  : "text-muted-foreground"
              } hover:text-primary transition-colors items-center gap-4`}
            >
              <span>{item.icon}</span>
              <Link
                href={item.herf}
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="logout flex flex-col gap-4 absolute bottom-6">
          <h2 className="text-muted-foreground">
            Login as <span className="text-primary">{data?.user?.name}</span>
          </h2>

          <Button className="w-full" onClick={() => signOut()}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
