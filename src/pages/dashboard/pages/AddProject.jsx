import DashboardHeader from "@/components/DashboardHeader";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const AddProject = () => {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title={"Overview"}
        text={"Explore a summary of your activities here"}
      />
      <div className="px-60 space-y-5">
        <h3>Add a Project</h3>
        <form className="space-y-2.5 font-normal">
          <Label className="font-normal" htmlFor="project">
            Project title:
          </Label>
          <Input type="text" id="project" placeholder="Enter a title..." />
          <Label htmlFor="description" className="font-normal">Description:</Label>
          <Textarea id="description" rows={7} placeholder="Describe your project here." />
          <Label className="font-normal" htmlFor="stack">
            Tech Stack:
          </Label>
          <Input type="text" id="stack" placeholder="Enter your stack..." />
          <Label className="font-normal" htmlFor="roles">
            Preferred Roles:
          </Label>
          <Input type="text" id="roles" placeholder="Enter the preferred roles..." />
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
                <SelectItem value="intermediate">Intermediate</SelectItem>
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
        <Button className={"cursor-pointer w-full bg-[#7D0FF2] hover:text-black hover:bg-white border-[#7D0FF2] border-3"}>Add Project</Button>
      </div>
    </div>
  );
};

export default AddProject;
