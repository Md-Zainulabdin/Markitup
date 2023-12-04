import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logout from "@/components/ui/Logout";
import { getAuth } from "@/lib/auth";

const Navbar: React.FC = async () => {
  const auth = await getAuth();

  return (
    <nav className="w-full h-[80px] bg-white fixed top-0 left-0 z-50 border-b flex justify-between items-center px-[20px] md:px-[50px]">
      <div className="logo text-indigo-500">
        <Image src={"/images/logo.png"} alt="Logo" width={170} height={170} />
      </div>
      <div className="menu space-x-4">
        {auth && (
          <>
            <Link
              href={"/dashboard"}
              className="text-md text-muted-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <span className="text-md text-muted-foreground">|</span>
          </>
        )}
        {auth ? (
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
