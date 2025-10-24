import BlueNavBar from "@/components/BlueNavBar";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, fetchProject, updateProject } from "@/redux-app/features/project/projectSlice";
import { FaEdit } from "react-icons/fa";
import CollaboratorProfileTile from "@/components/CollaboratorProfileTile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const getIconUrl = (name) => {
  return `/src/assets/stack-icons/${name}.svg`;
};

function ProjectDetailsAdminView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { project, projectLoading, projectError } = useSelector(
    (state) => state.project
  );
  const [localFormData, setLocalFormData] = useState(null);
  const [editDialogData, setEditDialogData] = useState({ field: '', value: '' });
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    dispatch(fetchProject(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (project) {
      setLocalFormData({
        ...project,
        techStack: project.techStack ? project.techStack.join(', ') : '',
        rolesNeeded: project.rolesNeeded ? project.rolesNeeded.join(', ') : ''
      });
    }
  }, [project]);

  const handleEditDialogSave = () => {
    const { field, value } = editDialogData;
    // If the value is an array, join it back into a string for local state consistency
    const valueToSave = Array.isArray(value) ? value.join(', ') : value;
    setLocalFormData(prev => ({ ...prev, [field]: valueToSave }));
  };

  const handleAddItem = () => {
    if (newItem.trim() === '') return;
    setEditDialogData(prev => ({
      ...prev,
      value: [...(prev.value || []), newItem.trim()]
    }));
    setNewItem('');
  };

  const handleRemoveItem = (indexToRemove) => {
    setEditDialogData(prev => ({
      ...prev,
      value: prev.value.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleSubmitChanges = async () => {
    // Create a clean object for submission
    const projectData = {
      title: localFormData.title,
      description: localFormData.description,
      status: localFormData.status,
      githubRepo: localFormData.githubRepo,
      difficultyLevel: localFormData.difficultyLevel,
      techStack: localFormData.techStack.split(',').map(s => s.trim()).filter(Boolean),
      rolesNeeded: localFormData.rolesNeeded.split(',').map(r => r.trim()).filter(Boolean),
    };

    // The backend route is a PATCH, so let's use api.patch
    const result = await dispatch(updateProject({ id, projectData }));

    if (updateProject.fulfilled.match(result)) {
      toast.success('Project updated successfully!');
    } else {
      toast.error(result.payload || 'Failed to update project.');
    }
  };

  const handleDeleteProject = async () => {
    const result = await dispatch(deleteProject(id));
    if (deleteProject.fulfilled.match(result)) {
      toast.success('Project deleted successfully!');
      navigate('/dashboard/projects');
    } else {
      toast.error(result.payload || 'Failed to delete project.');
    }
  };


  if (projectLoading) {
    return <div>Loading project details...</div>;
  }

  if (projectError) {
    return <div>Error: {projectError.message || "Failed to load project."}</div>;
  }

  if (!project || !localFormData) {
    return <div>Project not found.</div>;
  }

  return (
    <div>
      <Toaster position="top-center" />
      <BlueNavBar />
      <main className="max-w-[1000px] m-auto  pt-[2rem] px-9 lg:px-5">
        <section className="flex justify-between">
          <div className="relative w-fit">
            <h1 className="text-xl ">{localFormData.title}</h1>
            <button className="absolute top-[-17px] right-[-55px] rounded-sm text-sm px-2 py-0.3 bg-[#E9EBFA]">
              {localFormData.status}
            </button>
          </div>
          <Dialog>
            <form>
              <DialogTrigger asChild onClick={() => setEditDialogData({ field: 'title', value: localFormData.title || '' })}>
                <FaEdit className=" flex-shrink-0 cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit title</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1" className="font-normal"></Label>
                    <textarea
                      id="name-1"
                      rows="4"
                      name="name"
                      value={editDialogData.value}
                      onChange={(e) => setEditDialogData({ ...editDialogData, value: e.target.value })}
                    ></textarea>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose onClick={handleEditDialogSave}>
                    <Button type="submit">Edit</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </section>
        <section className="grid md:grid-cols-5 grid-cols-1 gap-3 mt-7">
          <div className=" w-full h-full md:col-span-3 flex flex-col gap-7 pr-5">
            <div className="flex justify-between w-full">
              <p className="text-md w-[95%]">{localFormData.description}</p>
              <Dialog>
                <form> 
                  <DialogTrigger asChild onClick={() => setEditDialogData({ field: 'description', value: localFormData.description || '' })}>
                    <FaEdit className="text-gray-400 hover:text-gray-700 flex-shrink-0 cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Description</DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="name-1" className="font-normal"></Label>
                        <textarea
                          id="name-1"
                          rows="4"
                          name="name"
                          value={editDialogData.value}
                          onChange={(e) => setEditDialogData({ ...editDialogData, value: e.target.value })}
                        ></textarea>
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <DialogClose onClick={handleEditDialogSave}>
                        <Button type="submit">Edit</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="font-semibold">Github</p>
                <Dialog>
                  <form>
                    <DialogTrigger asChild onClick={() => setEditDialogData({ field: 'githubRepo', value: localFormData.githubRepo || '' })}>
                      <FaEdit className="text-gray-400 hover:text-gray-700 flex-shrink-0 cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Link</DialogTitle>
                        <DialogDescription></DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label
                            htmlFor="name-1"
                            className="font-normal"
                          ></Label>
                          <textarea
                            id="name-1"
                            rows="4"
                            name="name"
                            value={editDialogData.value}
                            onChange={(e) => setEditDialogData({ ...editDialogData, value: e.target.value })}
                          ></textarea>
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose onClick={handleEditDialogSave}>
                          <Button type="submit">Edit</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
              </div>
              <a href={localFormData.githubRepo || '#'} className="text-blue-700" target="blank">
                {localFormData.githubRepo}
              </a>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="font-semibold">Difficulty</p>
                <Dialog>
                  <form>
                    <DialogTrigger asChild onClick={() => setEditDialogData({ field: 'difficultyLevel', value: localFormData.difficultyLevel || '' })}>
                      <FaEdit className="text-gray-400 hover:text-gray-700 flex-shrink-0 cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Difficulty</DialogTitle>
                        <DialogDescription></DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label
                            htmlFor="name-1"
                            className="font-normal"
                          ></Label>
                          <textarea
                            id="name-1"
                            rows="4"
                            name="name"
                            value={editDialogData.value}
                            onChange={(e) => setEditDialogData({ ...editDialogData, value: e.target.value })}
                          ></textarea>
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose onClick={handleEditDialogSave}>
                          <Button type="submit">Edit</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
              </div>
              {localFormData.difficultyLevel && <li>{localFormData.difficultyLevel}</li>}
            </div>

            <div>
              <div className="flex justify-between">
                <p className="font-semibold">Stack</p>
                <Dialog>
                  <form>
                    <DialogTrigger asChild onClick={() => {
                      const currentStack = localFormData.techStack ? localFormData.techStack.split(',').map(s => s.trim()).filter(Boolean) : [];
                      setEditDialogData({ field: 'techStack', value: currentStack });
                      setNewItem('');
                    }}>
                      <FaEdit className="text-gray-400 hover:text-gray-700 flex-shrink-0 cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Stack</DialogTitle>
                        <DialogDescription>Add or remove technologies from the project stack.</DialogDescription>
                      </DialogHeader>
                      <div className="flex items-center gap-2">
                        <Input
                          placeholder="e.g. React"
                          value={newItem}
                          onChange={(e) => setNewItem(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddItem();
                            }
                          }}
                        />
                        <Button type="button" onClick={handleAddItem}>Add</Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 min-h-[40px]">
                        {Array.isArray(editDialogData.value) && editDialogData.value.map((item, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-2">
                            {item}
                            <button
                              type="button"
                              className="text-xs font-bold text-red-500 hover:text-red-700"
                              onClick={() => handleRemoveItem(index)}
                            >
                              &times;
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline" type="button">Cancel</Button>
                        </DialogClose>
                        <DialogClose onClick={handleEditDialogSave}>
                          <Button type="submit">Done</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
              </div>
              {localFormData.techStack && localFormData.techStack.length > 0 ? (
                <ul className="flex flex-wrap gap-4">
                  {localFormData.techStack.split(',').map(s => s.trim()).filter(Boolean).map((stack, index) => (
                    <li key={index} className="flex gap-1 items-center">
                      <img className="w-8" src={getIconUrl(stack)} alt={stack} />
                      {stack}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No stack specified.</p>
              )}
            </div>

            <div>
              <div className="flex justify-between">
                <p className="font-semibold">Open Roles</p>
                <Dialog>
                  <form>
                    <DialogTrigger asChild onClick={() => {
                      const currentRoles = localFormData.rolesNeeded ? localFormData.rolesNeeded.split(',').map(r => r.trim()).filter(Boolean) : [];
                      setEditDialogData({ field: 'rolesNeeded', value: currentRoles });
                      setNewItem('');
                    }}>
                      <FaEdit className="text-gray-400 hover:text-gray-700 flex-shrink-0 cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Roles</DialogTitle>
                        <DialogDescription>Add or remove roles needed for the project.</DialogDescription>
                      </DialogHeader>
                      <div className="flex items-center gap-2">
                        <Input
                          placeholder="e.g. Frontend Developer"
                          value={newItem}
                          onChange={(e) => setNewItem(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddItem();
                            }
                          }}
                        />
                        <Button type="button" onClick={handleAddItem}>Add</Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 min-h-[40px]">
                        {Array.isArray(editDialogData.value) && editDialogData.value.map((item, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-2">
                            {item}
                            <button
                              type="button"
                              className="text-xs font-bold text-red-500 hover:text-red-700"
                              onClick={() => handleRemoveItem(index)}
                            >
                              &times;
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline" type="button">Cancel</Button>
                        </DialogClose>
                        <DialogClose onClick={handleEditDialogSave}>
                          <Button type="submit">Done</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
              </div>

              {localFormData.rolesNeeded && localFormData.rolesNeeded.length > 0 ? (
                <ul className="flex flex-col gap-2 pl-10">
                  {localFormData.rolesNeeded.split(',').map(r => r.trim()).filter(Boolean).map((role, index) => (
                    <li key={index} className="list-disc">{role}</li>
                  ))}
                </ul>
              ) : (
                 <p className="text-sm text-gray-500">No roles specified.</p>
              )}
            </div>
          </div>
          <div className=" border-2 border-black rounded-2xl w-full h-full md:col-span-2 p-6">
            <div className="flex justify-between">
              <p className="font-semibold">Collaborators</p>
              <div className="relative">
                <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
              </div>
            </div>
            {/* I'm assuming `contributors` is the correct field based on your schema */}
            {project.contributors && project.contributors.length > 0 ? (
              <div className="flex flex-col gap-6 mt-4">
                {project.contributors.map(({ user, role }) => (
                  <CollaboratorProfileTile key={user._id} person={user} role={role} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 mt-4">No collaborators yet.</p>
            )}
          </div>
        </section>
        <div className="flex justify-between items-center mt-8">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Project</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the project and remove all associated data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteProject} className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button onClick={handleSubmitChanges} disabled={projectLoading}>{projectLoading ? 'Submitting...' : 'Submit Changes'}</Button>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetailsAdminView;
