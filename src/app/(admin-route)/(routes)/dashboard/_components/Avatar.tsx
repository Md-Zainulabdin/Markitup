import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const UserAvatar = ({ url }: { url: string }) => {
  return (
    <div className="avatar">
      <Avatar>
        <AvatarImage src={url} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
