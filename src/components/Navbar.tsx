import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = async () => {
  const session = await getServerSession(options);
  console.log(session);

  return (
    <nav className="w-full h-[80px] border-b flex justify-between items-center px-[20px] md:px-[50px]">
      <div className="logo text-indigo-500">
        <Image src={"/images/logo.png"} alt="Logo" width={170} height={170} />
      </div>
      <div className="menu">
        <Link href={"/auth/login"} className="text-muted-foreground">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
