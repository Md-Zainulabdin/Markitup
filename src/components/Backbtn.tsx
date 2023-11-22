"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const Backbtn = () => {
  const router = useRouter();
  return (
    <div className="absolute top-32 left-0">
      <Button
        className="flex items-center gap-2"
        onClick={() => router.back()}
      >
        <ChevronLeft className="w-5 h-5" />
        Back
      </Button>
    </div>
  );
};

export default Backbtn;
