import React from "react";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Comment } from "@/assets";

const DashboardHeader = ({ title, text }) => {
  return (
    <div className="flex md:gap-[50rem] gap-10">
      <div className="space-y-3">
        <h1 className="text-4xl tracking-widest font-bold">{title}</h1>
        <p className="text-[13px]">{text}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <img src={Comment} alt="comments icon" className="h-5" />
        <Bell size={25} className="fill-black"/>
        <Avatar className="h-7 w-7">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardHeader;
