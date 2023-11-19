import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] border-b flex justify-between items-center px-[20px] md:px-[50px]">
      <div className="logo text-indigo-500">
        <Image src={"/images/logo.png"} alt="Logo" width={170} height={170} />
      </div>
      <div className="menu">
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
