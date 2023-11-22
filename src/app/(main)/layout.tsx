import Navbar from "@/components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="px-[20px] md:px-[50px]">{children}</main>
    </>
  );
};

export default RootLayout;
