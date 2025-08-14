import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { Checkbox, Clock } from "@/assets";

const ProjectSumary = ({ title, description, numOfCollab, numOfRequests, status }) => {

  // const [status, setStatus] = useState("In-progress");

  return (
    <div className="bg-[#F9F9F9] flex w-full justify-between items-center md:px-10 px-1 py-2 rounded-sm shadow-xl/20">
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
      <div>
        
        {status.toLowerCase() === "in progress"
        ? <img src={Clock} className="h-8" />
        : <img src={Checkbox} className="h-8 text-[#7D0FF2]" />
        }
      </div>
      
    </div>
  );
};

export default ProjectSumary;
