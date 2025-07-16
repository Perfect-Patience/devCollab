import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"

const Profile = () => {
  return (
    <div className="bg-white p-4 space-y-5 rounded-sm">
      <div className="flex gap-5 items-center">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <span className="text-xl font-bold">Ama Doe</span>
      </div>
      <p className="text-center text-xl">amadoe@gmail.com</p>
      <Button className={"bg-[#7D0FF2] w-full hover:bg-white hover:text-[#4B0084] cursor-pointer text-[16px]"}>Sign out</Button>
      
    </div>
  );
};

export default Profile;
