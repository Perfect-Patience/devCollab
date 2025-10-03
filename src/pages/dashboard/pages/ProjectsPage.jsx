import DashboardHeader from "@/components/DashboardHeader";
import ProjectSumary from "@/components/ProjectSumary";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getUserProjects } from "@/redux-app/features/user/userProjectsSlice";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { postProject } from "@/redux-app/features/project/projectSlice";
import toast from "react-hot-toast";
import { DialogTitle } from "@radix-ui/react-dialog";

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const { projects, loading, error } = useSelector(
    (store) => store.userProjects
  );
  const { projectLoading } = useSelector((store) => store.project);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: [],
    rolesNeeded: [],
    tags: ["All", "Popular"], // Automatically include "All" and "Popular"
    difficultyLevel: "",
    githubRepo: "",
  });
  const [newRoleItem, setNewRoleItem] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [techStackOpen, setTechStackOpen] = useState(false);
  const [techStackSearch, setTechStackSearch] = useState("");

  // This list should be populated with the names of your icon files in 'src/assets/stack-icons'
  const availableTechStack = useMemo(
    () => [
      { value: "React", label: "React" },
      { value: "Redux", label: "Redux" },
      { value: "Next.js", label: "Next.js" },
      { value: "Vue js", label: "Vue.js" },
      { value: "Vuex", label: "Vuex" },
      { value: "Nuxt.js", label: "Nuxt.js" },
      { value: "AngularJs", label: "Angular" },
      { value: "Angular", label: "Angular" }, // Modern Angular
      { value: "Node js", label: "Node.js" },
      { value: "Express", label: "Express" },
      { value: "NestJS", label: "NestJS" },
      { value: "Koa", label: "Koa" },
      { value: "MongoDB", label: "MongoDB" },
      { value: "Mongoose", label: "Mongoose" },
      { value: "Firebase", label: "Firebase" },
      { value: "PostgreSQL", label: "PostgreSQL" },
      { value: "MySQL", label: "MySQL" },
      { value: "SQLite", label: "SQLite" },
      { value: "Prisma", label: "Prisma" },
      { value: "Sequelize", label: "Sequelize" },
      { value: "TypeORM", label: "TypeORM" },
      { value: "TailwindCSS", label: "Tailwind CSS" },
      { value: "Bootstrap", label: "Bootstrap" },
      { value: "MaterialUI", label: "Material UI" },
      { value: "ChakraUI", label: "Chakra UI" },
      { value: "StyledComponents", label: "Styled Components" },
      { value: "Sass", label: "Sass" },
      { value: "Less", label: "Less" },
      { value: "JavaScript", label: "JavaScript" },
      { value: "TypeScript", label: "TypeScript" },
      { value: "HTML5", label: "HTML5" },
      { value: "CSS3", label: "CSS3" },
      { value: "Socket.io", label: "Socket.io" },
      { value: "Electron", label: "Electron" },
      { value: "Python", label: "Python" },
      { value: "Django", label: "Django" },
      { value: "Flask", label: "Flask" },
      { value: "FastAPI", label: "FastAPI" },
      { value: "Ruby", label: "Ruby" },
      { value: "Rails", label: "Rails" },
      { value: "PHP", label: "PHP" },
      { value: "Laravel", label: "Laravel" },
      { value: "Java", label: "Java" },
      { value: "Spring", label: "Spring" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Swift", label: "Swift" },
      { value: "C#", label: "C#" },
      { value: "DotNet", label: ".NET" },
      { value: "Go", label: "Go" },
      { value: "Rust", label: "Rust" },
      { value: "C++", label: "C++" },
      { value: "C", label: "C" },
      { value: "GraphQL", label: "GraphQL" },
      { value: "Apollo", label: "Apollo" },
      { value: "REST", label: "REST" },
      { value: "Docker", label: "Docker" },
      { value: "Kubernetes", label: "Kubernetes" },
      { value: "AWS", label: "AWS" },
      { value: "Azure", label: "Azure" },
      { value: "GoogleCloud", label: "Google Cloud" },
      { value: "Heroku", label: "Heroku" },
      { value: "Netlify", label: "Netlify" },
      { value: "Vercel", label: "Vercel" },
      { value: "Git", label: "Git" },
      { value: "GitHub", label: "GitHub" },
      { value: "GitLab", label: "GitLab" },
      { value: "Bitbucket", label: "Bitbucket" },
      { value: "Jira", label: "Jira" },
      { value: "Confluence", label: "Confluence" },
      { value: "Slack", label: "Slack" },
      { value: "Discord", label: "Discord" },
      { value: "Figma", label: "Figma" },
      { value: "Sketch", label: "Sketch" },
      { value: "AdobeXD", label: "Adobe XD" },
      { value: "Photoshop", label: "Photoshop" },
      { value: "Illustrator", label: "Illustrator" },
      { value: "VSCode", label: "VS Code" },
      { value: "Webpack", label: "Webpack" },
      { value: "Babel", label: "Babel" },
      { value: "Gatsby", label: "Gatsby" },
      { value: "Jest", label: "Jest" },
      { value: "Cypress", label: "Cypress" },
      { value: "Selenium", label: "Selenium" },
      { value: "Playwright", label: "Playwright" },
      { value: "Storybook", label: "Storybook" },
      { value: "Three.js", label: "Three.js" },
      { value: "D3.js", label: "D3.js" },
      { value: "Chart.js", label: "Chart.js" },
      { value: "TensorFlow", label: "TensorFlow" },
      { value: "PyTorch", label: "PyTorch" },
      { value: "Keras", label: "Keras" },
      { value: "Scikit-learn", label: "Scikit-learn" },
      { value: "Pandas", label: "Pandas" },
      { value: "NumPy", label: "NumPy" },
      { value: "Matplotlib", label: "Matplotlib" },
      { value: "PowerBI", label: "Power BI" },
      { value: "Tableau", label: "Tableau" },
    ],
    []
  );

  // Filtered list based on search input for Tech Stack
  const filteredTechStack = availableTechStack.filter((tech) =>
    tech.label.toLowerCase().includes(techStackSearch.toLowerCase())
  );

  const availableTags = [
    "Web",
    "Mobile",
    "Desktop",
    "React",
    "MERN",
    "Node js",
    "Vue js",
    "Angular Js",
  ];

  useEffect(() => {
    if (user && user.user && user.user._id) {
      dispatch(getUserProjects(user.user._id));
    }
  }, [dispatch, user]);

  const handleAddRoleItem = () => {
    if (newRoleItem.trim() === "") return;
    setFormData((prev) => ({
      ...prev,
      rolesNeeded: [...prev.rolesNeeded, newRoleItem.trim()],
    }));
    setNewRoleItem("");
  };

  const handleRemoveItem = (field, indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, index) => index !== indexToRemove),
    }));
  };


  const handleToggleTech = (value) => {
  console.log("toggle tech:", value);
  setFormData((prev) => {
    const exists = prev.techStack.includes(value);
    const newStack = exists
      ? prev.techStack.filter((t) => t !== value)
      : [...prev.techStack, value];
    console.log("newStack:", newStack);
    return { ...prev, techStack: newStack };
  });
};
  const handleTagChange = (tag) => {
    setFormData((prev) => {
      const newTags = prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags: newTags };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.difficultyLevel) {
      toast.error("Please select a difficulty level.");
      return;
    }
    console.log("attempting to submit form");
    console.log(formData);

    dispatch(postProject(formData)).then((action) => {
      if (action.type.endsWith("fulfilled")) {
        dispatch(getUserProjects(user.user._id));
        setDialogOpen(false); // Close dialog on success
      }
    });
  }
  if (loading) {
    return (
      <>
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <Skeleton className="h-[50px] w-[100%] rounded-full" />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <p className=" text-slate-600">
            Something went wrong, couldn't load project
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="space-y-14 px-4 overflow-y-scroll overflow-x-hidden h-[100%]">
      <DashboardHeader
        title={"Projects"}
        text={"Find all projects you're part of or join a new project"}
      />
      <div className="flex justify-between">
        <h3 className="font-bold">All Projects</h3>
        <div className="flex gap-3">
          {projectLoading ? (
            <div className="flex h-screen items-center justify-center">
              <Spinner size="lg" />
            </div>
          ) : (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
<DialogTitle></DialogTitle>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="cursor-pointer border-3 border-[#7D0FF2] bg-white text-black hover:text-white hover:bg-[#7D0FF2] px-4 py-1 rounded-md font-semibold"
                >
                  Add Project
                </Button>
              </DialogTrigger>

              {/* Dialog Content */}
              <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-lg font-semibold text-foreground">
                  Add a Project
                </h2>
                <form className="space-y-4 font-normal" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <Label className="font-normal" htmlFor="title">
                      Project title:
                    </Label>
                    <Input
                      type="text"
                      id="title"
                      placeholder="Enter a title..."
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="description" className="font-normal">
                      Description:
                    </Label>
                    <Textarea
                      id="description"
                      rows={5}
                      placeholder="Describe your project here."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  {/* --- Tech Stack --- */}
{/* --- Tech Stack (simple dropdown + search) --- */}
<div className="relative w-full">
  {/* Trigger */}
  <button
    type="button"
    onClick={() => setTechStackOpen((o) => !o)}
    className="w-full border rounded px-3 py-2 flex justify-between items-center"
  >
    {formData.techStack.length > 0
      ? `${formData.techStack.length} technolog${formData.techStack.length > 1 ? "ies" : "y"} selected`
      : "Select technologies..."}
    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  </button>

  {/* Dropdown */}
  {techStackOpen && (
    <div className="absolute z-50 mt-1 w-full border rounded bg-white shadow p-2">
      {/* Search */}
      <input
        type="text"
        value={techStackSearch}
        onChange={(e) => setTechStackSearch(e.target.value)}
        placeholder="Search..."
        className="w-full px-2 py-1 mb-2 border rounded"
      />

      {/* List */}
      <div className="max-h-48 overflow-auto">
        {filteredTechStack.length === 0 && (
          <div className="px-2 py-1 text-gray-500">No technology found.</div>
        )}

        {filteredTechStack.map((tech) => (
          <button
            key={tech.value}
            type="button"
            onClick={(e) => {
              e.preventDefault();      // ensure no native behavior interferes
              e.stopPropagation();     // keep event local
              handleToggleTech(tech.value);
            }}
            className="w-full text-left px-2 py-1 hover:bg-gray-100 flex justify-between items-center"
          >
            <span>{tech.label}</span>
            {formData.techStack.includes(tech.value) && (
              <CheckIcon className="h-4 w-4 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  )}

  {/* Selected Tech Stack Badges (outside dropdown) */}
  <div className="mt-2 flex flex-wrap gap-2">
    {formData.techStack.map((value) => {
      const label =
        availableTechStack.find((t) => t.value === value)?.label || value;
      return (
        <Badge key={value} variant="secondary" className="flex items-center gap-2">
          {label}
          <button
            type="button"
            onClick={() => handleToggleTech(value)}
            className="text-xs font-bold text-red-500 hover:text-red-700"
          >
            &times;
          </button>
        </Badge>
      );
    })}
  </div>
</div>


                  <div className="space-y-1">
                    <Label className="font-normal" htmlFor="roles">
                      Preferred Roles:
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="text"
                        id="roles-input"
                        placeholder="e.g. Frontend Developer"
                        value={newRoleItem}
                        onChange={(e) => setNewRoleItem(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddRoleItem();
                          }
                        }}
                      />
                      <Button type="button" onClick={handleAddRoleItem}>
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 min-h-[24px]">
                      {formData.rolesNeeded.map((item, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-2"
                        >
                          {item}
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveItem("rolesNeeded", index)
                            }
                            className="text-xs font-bold text-red-500 hover:text-red-700"
                          >
                            &times;
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label className="font-normal">Project Tags:</Label>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                      {availableTags.map((tag) => (
                        <div key={tag} className="flex items-center gap-2">
                          <Checkbox
                            id={`tag-${tag}`}
                            checked={formData.tags.includes(tag)}
                            onCheckedChange={() => handleTagChange(tag)}
                          />
                          <Label htmlFor={`tag-${tag}`} className="font-normal">
                            {tag}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label className="font-normal" htmlFor="github">
                      GitHub Link:
                    </Label>
                    <Input
                      type="text"
                      id="github"
                      placeholder="https://github.com/user/repo"
                      value={formData.githubRepo}
                      onChange={(e) =>
                        setFormData({ ...formData, githubRepo: e.target.value })
                      }
                    />
                  </div>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, difficultyLevel: value })
                    }
                    value={formData.difficultyLevel}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Levels</SelectLabel>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button
                    type="submit"
                    className="w-full bg-[#7D0FF2] hover:text-black hover:bg-white border-[#7D0FF2] border-3"
                    disabled={projectLoading}
                  >
                    {projectLoading ? "Adding Project..." : "Add Project"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          )}
          {/* <NavLink
            to="/explore"

            
          >
            Add Project
          </NavLink> */}
          <NavLink
            className={
              "cursor-pointer text-white bg-[#7D0FF2] hover:text-black hover:bg-white border-[#7D0FF2] border-3 rounded-sm px-4 font-semibold"
            }
            to="/explore"
          >
            Join Project
          </NavLink>
        </div>
      </div>
      <div className="space-y-5">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <ProjectSumary
              key={project._id}
              title={project.title}
              description={project.description}
              numOfCollab={project.contributors.length}
              status={project.status}
              numOfRequests={0}
              id={project._id}
            />
          ))
        ) : (
          <p className="text-center text-lg text-slate-400">
            No projects to display.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
