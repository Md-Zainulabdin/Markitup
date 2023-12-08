"use client";

import Image from "next/image";
import Link from "next/link";

import { MdOutlineHome } from "react-icons/md";
import { ActivitySquare, Combine, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathname = usePathname();

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
    <div className="w-full h-full p-8">
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

        <div className="menu-links mt-20 flex flex-col gap-6">
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
      </div>
    </div>
  );
};

export default AdminNav;
