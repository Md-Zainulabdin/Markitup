import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";

import { options } from "@/app/api/auth/[...nextauth]/option";
import { Button } from "@/components/ui/button";
import Logout from "@/components/ui/Logout";

const Navbar: React.FC = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="w-full h-[80px] bg-white fixed top-0 left-0 border-b flex justify-between items-center px-[20px] md:px-[50px]">
      <div className="logo text-indigo-500">
        <Image src={"/images/logo.png"} alt="Logo" width={170} height={170} />
      </div>
      <div className="menu space-x-4">
        {session && (
          <>
            <Link href={"/"} className="text-md text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <span className="text-md text-muted-foreground">|</span>
          </>
        )}
        {session ? (
          <Logout />
        ) : (
          <Link href={"/auth/login"} className="text-muted-foreground">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
