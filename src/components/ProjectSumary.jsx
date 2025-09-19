import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle } from "lucide-react";

const ProjectSummary = ({ title, description, numOfCollab, numOfRequests, status }) => {
  return (
    <Card className="w-full shadow-sm rounded-2xl border p-4 md:p-6 bg-white hover:shadow-lg transition">
      <CardContent className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* Title + Description */}
        <div className=" space-y-2">
          <h4 className="font-semibold text-lg md:text-xl line-clamp-1">{title}</h4>
          <p className="text-sm text-gray-600 line-clamp-1">{description}</p>
        </div>

        {/* Collaborators */}
        <div className="flex flex-col items-center">
          <div className="flex -space-x-2 mb-1">
            <Avatar className="w-9 h-9">
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-9 h-9">
              <AvatarImage src="" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar className="w-9 h-9">
              <AvatarImage src="" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-xs text-gray-500">{numOfCollab} collaborators</span>
        </div>

        {/* Requests */}
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold text-xl">{numOfRequests}</span>
          <span className="text-xs text-gray-500">Requests Pending</span>
        </div>

        {/* Status */}
        <div className="flex items-center justify-center">
          {status.toLowerCase() === "in progress" ? (
            <Badge variant="outline" className="flex items-center gap-1 text-yellow-600 border-yellow-400">
              <Clock className="w-4 h-4" /> In Progress
            </Badge>
          ) : (
            <Badge variant="secondary" className="flex items-center gap-1 text-green-600 border-green-400">
              <CheckCircle className="w-4 h-4" /> Completed
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectSummary;
