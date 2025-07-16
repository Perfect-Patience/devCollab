import DashboardHeader from "@/components/DashboardHeader";
import ProjectSumary from "@/components/ProjectSumary";
import { Button } from "@/components/ui/button";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="space-y-14">
      <DashboardHeader
        title={"Projects"}
        text={"Find all projects you're part of or join a new project"}
      />
      <div className="flex justify-between">
        <h3 className="font-bold">All Projects</h3>
        <div className="flex gap-3">
          <Button
            className={
              "cursor-pointer border-3 border-[#7D0FF2] bg-white text-black hover:text-white hover:bg-[#7D0FF2]"
            }
          >
            Add Project
          </Button>
          <Button
            className={
              "cursor-pointer text-white bg-[#7D0FF2] hover:text-black hover:bg-white border-[#7D0FF2] border-3"
            }
          >
            Join Project
          </Button>
        </div>
      </div>
      <div className="space-y-7">
        <ProjectSumary
          title={
            "Mp3 converter App text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          description={
            "Project description in detail of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
          }
          numOfCollab={"10"}
          numOfRequests={"5"}
          ownership={"Owner"}
          status={"In Progress"}
        />
        <ProjectSumary
          title={
            "Mp3 converter App text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          description={
            "Project description in detail of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
          }
          numOfCollab={"10"}
          numOfRequests={"5"}
          ownership={"Owner"}
          status={"In Progress"}
        />
        <ProjectSumary
          title={
            "Mp3 converter App text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          description={
            "Project description in detail of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
          }
          numOfCollab={"10"}
          numOfRequests={"0"}
          ownership={"Collaborator"}
          status={"In Progress"}
        />
        <ProjectSumary
          title={
            "Mp3 converter App text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          description={
            "Project description in detail of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
          }
          numOfCollab={"10"}
          numOfRequests={"5"}
          ownership={"Collaborator"}
          status={"Done"}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
