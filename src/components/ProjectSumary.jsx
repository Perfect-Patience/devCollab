import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

const ProjectSummary = ({ title, description, numOfCollab, numOfRequests, status, id }) => {

  const navigate = useNavigate()

  return (
    <Card className="w-full shadow-sm rounded-2xl border p-4 md:p-6 bg-white hover:shadow-lg transition group">
      <CardContent className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
        {/* Title + Description */}
        <div className="flex-1 space-y-2 cursor-pointer" onClick={()=> navigate(`/${id}`)}>
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
          <span className="text-xs text-gray-500">{numOfCollab} {numOfCollab <= 1? "collaborator" : "collaborators"}</span>
        </div>

        {/* Requests */}
        <div className="flex flex-col items-center justify-center min-w-[120px]">
          <span className="font-bold text-xl">{numOfRequests}</span>
          <span className="text-xs text-gray-500">Requests Pending</span>
        </div>

        {/* Status */}
        <div className="flex items-center justify-center min-w-[120px]">
          {status.toLowerCase() === "in progress" ? (
            <Badge variant="outline" className="flex items-center gap-1 text-yellow-600 border-yellow-400">
              <Clock className="w-4 h-4" /> In Progress
            </Badge>
          ) : (
            <Badge variant="secondary" className="flex items-center gap-1 text-green-600 border-green-400">
              <CheckCircle className="w-4 h-4" /> {status}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectSummary;
