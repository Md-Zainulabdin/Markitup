import Image from "next/image";
import Link from "next/link";

import { MdOutlineHome } from "react-icons/md";
import { ActivitySquare, Combine, UserCircle } from "lucide-react";

const AdminNav = () => {
  const links = [
    {
      icon: <MdOutlineHome size={28}/>,
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
          <Image
            src={`/images/logo.png`}
            alt="Dashboard Logo"
            width={180}
            height={150}
          />
        </div>

        <div className="menu-links mt-20 flex flex-col gap-6">
          {links.map((item, index) => (
            <div key={index} className="flex text-muted-foreground hover:text-[#222] transition-colors items-center gap-4">
              <span>{item.icon}</span>
              <Link
                href={item.herf}
                className="text-lg text-muted-foreground hover:text-[#222] transition-colors"
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
