import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"

const ProjectSumary = ({ title, description, numOfCollab, numOfRequests, ownership, status }) => {
  return (
    <div className="bg-[#E9EBFA] flex w-full justify-between items-center px-10 py-3 rounded-sm">
      <div className="w-[20%] space-y-2">
        <h4 className="line-clamp-1 font-bold text-xl">{title}</h4>
        <p className="line-clamp-1">{description}</p>
      </div>
      <div>
        <div className="flex -space-x-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
        <span>{numOfCollab} collaborators</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-2xl">{numOfRequests}</span>
        <span>Requests Pending</span>
      </div>
      <div className="space-x-5">
        <Button className={"w-30 cursor-pointer text-black bg-[#E0FFC9] hover:bg-white"}>{ownership}</Button>
        <Button className={"w-30 cursor-pointer text-black bg-[#06C91D] hover:bg-white"}>{status}</Button>
      </div>
      
    </div>
  );
};

export default ProjectSumary;
