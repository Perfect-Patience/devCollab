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
import { getUserProjects } from "@/redux-app/features/user/userProjectsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner"
// import { description } from "@/components/ChartLine";
import { postProject } from "@/redux-app/features/project/projectSlice";


const ProjectsPage = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate();
const {user} = useSelector((store) => store.auth);
const {projects, loading, error} = useSelector((store) => store.userProjects);
const {project, projectLoading, projectError} = useSelector((store) => store.project)
const [formData , setFormData] = useState({
  title : "",
  description : "",
  stack: [],
  rolesNeeded: [],
  difficultyLevel : "",
  githubRepo: ""
})
const [dialogOpen, setDialogOpen] = useState(false);

useEffect(() => {
    if (user && user.user && user.user._id) {
      dispatch(getUserProjects(user.user._id));
    }
  }, [dispatch, user]);


  async function handleSubmit(e){
e.preventDefault()
    console.log("attempting to submit form")
    console.log(formData)

    dispatch(postProject(formData)).then((action) => {
    if (action.type.endsWith('fulfilled')) {
      dispatch(getUserProjects(user.user._id))
      setDialogOpen(false); // Close dialog on success
    }
  });
  }
if(loading){
  return <>
   <div className="w-[100%] h-[100%] flex items-center justify-center">
  <Skeleton className="h-[50px] w-[100%] rounded-full" />
   
  </div>
  </>
}

if(error){
  return <>
  <div className="w-[100%] h-[100%] flex items-center justify-center">
    <p className=" text-slate-600">Something went wrong, couldn't load project</p>
  </div>
  </>
}

  
  return (
    <div className="space-y-14">
      <DashboardHeader
        title={"Projects"}
        text={"Find all projects you're part of or join a new project"}
      />
      <div className="flex justify-between">
        <h3 className="font-bold">All Projects</h3>
        <div className="flex gap-3">
          
          {projectLoading? <div className="flex h-screen items-center justify-center">
      <Spinner size="lg" />
    </div>:<Dialog open={dialogOpen} onOpenChange={setDialogOpen} >
            <DialogTrigger asChild>
              <Button variant="outline" className={
              "cursor-pointer border-3 border-[#7D0FF2] bg-white text-black hover:text-white hover:bg-[#7D0FF2] px-4 py-1 rounded-md font-semibold"

            }>Add Project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="space-y-5">
                <h3>Add a Project</h3>
                <form className="space-y-2.5 font-normal" onSubmit={(e) => handleSubmit(e)}>
                  <Label className="font-normal" htmlFor="title">
                    Project title:
                  </Label>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="Enter a title..."
                    required
                  />
                  <Label htmlFor="description" className="font-normal">
                    Description:
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={e => setFormData({...formData,description: e.target.value})}
                    rows={7}
                    placeholder="Describe your project here."
                    required
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
                  <Input type="text" id="github" placeholder="" 
                  
                   name="githubRepo"
                    value={formData.githubRepo}
                    onChange={e => setFormData({...formData,githubRepo: e.target.value})}
                  />
                  <Select value={formData.difficultyLevel} onValueChange={value => setFormData({...formData,difficultyLevel: value })} required>
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
                        <SelectItem value="advanced">Advance</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-3">
                    <Checkbox id="post" />
                    <Label className="font-normal my-2" htmlFor="post">
                      Post to community
                    </Label>
                  </div>
                <Button 
                  className={
                    "cursor-pointer w-full bg-[#7D0FF2] hover:text-black hover:bg-white border-[#7D0FF2] border-3"
                  }
                  
                  >
                  Add Project
                </Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>}
          {/* <NavLink
            to="/explore"

            
          >
            Add Project
          </NavLink> */}
          <NavLink

            className={
              "cursor-pointer text-white bg-[#7D0FF2] hover:text-black hover:bg-white border-[#7D0FF2] border-3 rounded-sm px-4 font-semibold"
            }
            to = '/explore'
          >
            Join Project
          </NavLink>
        </div>
      </div>
      <div className="space-y-5">
        {projects && projects.length > 0? projects.map((project) => <ProjectSumary title={project.title} description={project.description} numOfCollab={project.contributors.length} status={project.status} numOfRequests={0}/>

        ): <p className="text-center text-lg text-slate-400">No projects to display.</p>} 
       
      </div>
      <Outlet />
    </div>
  );
};

export default ProjectsPage;