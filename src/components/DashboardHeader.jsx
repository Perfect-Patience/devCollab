import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Comment, Bell, Ellipse } from "@/assets";
import { useSelector } from "react-redux";

const DashboardHeader = ({ title, text }) => {
  const { user, loading, error } = useSelector((store) => store.auth);
  return (
    <div className="flex md:gap-[50rem] gap-10 md:pt-0 pt-7">
      <div className="space-y-3">
        <h1 className="text-4xl tracking-widest font-bold">{title}</h1>
        <p className="text-[13px]">{text}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <img src={Comment} alt="comments icon" className="h-5" />
        <img src={Bell} alt="comments icon" className="h-5" />
        <Avatar className="h-7 w-7">
          <AvatarImage src={`${import.meta.env.VITE_API_URL}/${user?.user?.profilePic}`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardHeader;
