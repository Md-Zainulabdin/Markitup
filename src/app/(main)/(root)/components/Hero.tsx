import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[80vh]">
      <div className="w-full h-full flex items-center justify-center flex-col gap-6">
        <div>
          {" "}
          <h2 className="text-md text-muted-foreground">🖤</h2>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl inter-font font-bold text-[#222]">
            Explore The World
          </h1>
          <div className="flex justify-center items-center flex-wrap gap-4 text-5xl sm:text-6xl  md:text-7xl inter-font font-bold text-[#222]">
            <h2>With</h2>
            <Image
              src={"/images/arrow-icon.png"}
              alt="arrow-icon"
              width={130}
              height={130}
              className="hidden sm:block"
            />
            <h1 className="text-primary">Markitup</h1>
          </div>
        </div>

        <div className="mt-4 max-w-[550px] text-center">
          <p className="text-lg text-muted-foreground">
            We are a team of enthusiastic individuals who help brands grow by
            unleashing the potential of social media
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Button size={"lg"}>
            <Link href={"https://bit.ly/contactmarkitup"} target="_blank">
              Contact us
            </Link>
          </Button>
          <Button size={"lg"} variant={"secondary"}>
            <Link
              href="https://drive.google.com/file/d/1Sc--LpkSRmWgGzp2uQhi78h9062630GG/view?usp=sharing"
              target="_blank"
            >
              Download Brochure
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
