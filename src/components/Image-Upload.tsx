"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImagePlus, Trash } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  disabled?: boolean;
  onchange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onchange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onchange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div key={url}>
            <div
              className="relative w-[150px] h-[150px] rounded-full overflow-hidden"
            >
              <Image
                fill
                src={url}
                alt="profile-image"
                className="object-cover"
              />
            </div>

            <div className="text-right">
              <Button
                type="button"
                variant={"destructive"}
                size={"icon"}
                onClick={() => onRemove(url)}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <CldUploadWidget onUpload={onUpload} uploadPreset="osislwx5">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type="submit"
              variant={"secondary"}
              disabled={disabled}
              onClick={onClick}
            >
              <ImagePlus className="w-4 h-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
