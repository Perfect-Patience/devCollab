import DashboardHeader from "@/components/DashboardHeader";
import ProjectSumary from "@/components/ProjectSumary";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";


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
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className={
              "cursor-pointer border-3 border-[#7D0FF2] bg-white text-black hover:text-white hover:bg-[#7D0FF2] px-4 py-1 rounded-md font-semibold"

            }>Add Project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="space-y-5">
                <h3>Add a Project</h3>
                <form className="space-y-2.5 font-normal">
                  <Label className="font-normal" htmlFor="project">
                    Project title:
                  </Label>
                  <Input
                    type="text"
                    id="project"
                    placeholder="Enter a title..."
                  />
                  <Label htmlFor="description" className="font-normal">
                    Description:
                  </Label>
                  <Textarea
                    id="description"
                    rows={7}
                    placeholder="Describe your project here."
                  />
                  <Label className="font-normal" htmlFor="stack">
                    Tech Stack:
                  </Label>
                  <Input
                    type="text"
                    id="stack"
                    placeholder="Enter your stack..."
                  />
                  <Label className="font-normal" htmlFor="roles">
                    Preferred Roles:
                  </Label>
                  <Input
                    type="text"
                    id="roles"
                    placeholder="Enter the preferred roles..."
                  />
                  <Label className="font-normal" htmlFor="github">
                    GitHub Link:
                  </Label>
                  <Input type="text" id="github" placeholder="" />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Levels</SelectLabel>

                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="advance">Advance</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-3">
                    <Checkbox id="post" />
                    <Label className="font-normal" htmlFor="post">
                      Post to community
                    </Label>
                  </div>
                </form>
                <Button
                  className={
                    "cursor-pointer w-full bg-[#7D0FF2] hover:text-black hover:bg-white border-[#7D0FF2] border-3"
                  }
                >
                  Add Project
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <NavLink
            to="/explore"

            }
          >
            Add Project
          </Link>
          <Button

            className={
              "cursor-pointer text-white bg-[#7D0FF2] hover:text-black hover:bg-white border-[#7D0FF2] border-3"
            }
            onClick={navigate('/explore')}
          >
            Join Project
          </Button>
        </div>
      </div>
      <div className="space-y-5">
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
      <Outlet />
    </div>
  );
};

export default ProjectsPage;
