import BlueNavBar from '@/components/BlueNavBar';
import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router'

// import projects from '../../database.json';

import { FaEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CollaboratorProfileTile from '@/components/CollaboratorProfileTile'
import Footer from '@/components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '@/redux-app/features/project/projectSlice';

const getIconUrl = (name) => {
  return `/src/assets/stack-icons/${name}.svg`;
};

function ProjectDetailsPage() {
     const { id } = useParams();
  const dispatch = useDispatch();
  const { project, projectLoading, projectError } = useSelector(
    (state) => state.project
  );
  const { user } = useSelector((state) => state.auth);
  console.log(user)

  const isOwner = user && project && user.user._id === project.ownerId._id;

  useEffect(() => {
    dispatch(fetchProject(id));
  }, [dispatch, id]);

  if (projectLoading) {
    return <div>Loading project details...</div>;
  }

  if (projectError) {
    return <div>Error: {projectError.message || "Failed to load project."}</div>;
  }

  if (!project) {
    return <div>Project not found.</div>;
  }
    console.log(project)
  return (
    <div>
        <BlueNavBar/>
            <main className='max-w-[1000px] m-auto  pt-[2rem] px-9 lg:px-5'>
                <section className='flex justify-between'>
                    <div className='relative w-fit'>
                    <h1 className='text-xl '>{project.title}</h1>
                    <button className='absolute top-[-17px] right-[-55px] rounded-sm text-sm px-2 py-0.3 bg-[#E9EBFA]'>{project.status}</button>
                    </div>
                    <div className="flex items-center gap-4">
                      {isOwner && (
                        <NavLink to={`/admin/${project._id}`}>
                          <Button variant="outline">Edit</Button>
                        </NavLink>
                      )}
                      <Dialog>
                        <form>
                          <DialogTrigger asChild>
                            <button className='bg-[#4B0082] text-white px-6 py-1 rounded-md cursor-pointer'>Join</button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Join {project.title}</DialogTitle>
                              <DialogDescription>
                                Want to join the {project.title} project?
                              
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                              <div className="grid gap-3">
                                <Label htmlFor="name-1" className='font-normal'>Let the project admin know why you&apos;re interested in joining this project. (Max 300 characters) Optional</Label>
                                <textarea id="name-1"  rows="4" name="name"></textarea>
                              </div>
                              
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <DialogClose>
                              <Button type="submit">Join</Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </form>
                      </Dialog>
                    </div>
                </section>
                <section className='grid md:grid-cols-5 grid-cols-1 gap-3 mt-7'>
                    <div className=' w-full h-full md:col-span-3 flex flex-col gap-5 pr-5'>
                        <p className='text-md'>{project.description}</p>
                        <div>
                            <p className='font-semibold'>Github:</p>
                        {project.githubRepo ? <a href={project.githubRepo} className='text-blue-700' target='blank'>{project.githubRepo}</a> : <p className='text-gray-500'>Not available</p>}
                        </div>
                        <div>
                            <p className='font-semibold'>Difficulty</p>
                    {project.difficultyLevel ? <li>{project.difficultyLevel}</li> : <p className='text-gray-500'>Not available</p>}
                        </div>

                        <div>
                            <p className='font-semibold'>Stack</p>
                            {project.techStack && project.techStack.length > 0 ? (
                            <ul className='flex flex-wrap gap-4'>
                                {project.techStack.map((stack) => (
                                    <li key={stack} className='flex gap-1 items-center'><img className='w-8' src={getIconUrl(stack)}/>{stack}</li>
                                ))}
                            </ul>
                            ) : (
                                <p className='text-gray-500'>Not available</p>
                            )}


                        </div>

                        <div>
                            <p className='font-semibold'>Roles</p>
                            
                            {project.rolesNeeded && project.rolesNeeded.length > 0 ? (
                                <ul className='flex flex-col gap-2 pl-10'>
                                {
                                    project.rolesNeeded.map((role) => (
                                        <li className='list-disc'>{role}</li>
                                    ))
                                }
                            </ul>
                            ) : (
                                <p className='text-gray-500 pl-10'>Not available</p>
                            )}
                        </div>
                    </div>
                    <div className=' border-2 border-black rounded-2xl w-full h-fit md:col-span-2 p-6'>
                        <div className='flex justify-between'>
                            <p className='font-semibold'>Collaborators</p>
                            {/* <div className='relative'>
                                <div className='w-[10px] h-[10px] bg-green-600 rounded-full' ></div>
                                <p className='absolute text-xs top-[-13px] right-[-4px]'>{project.pendingCollaborators.length}</p>
                            </div> */}
                        </div>

                        {/* <div className='flex flex-col gap-6 mt-4'>
                           {
                            project.pendingCollaborators.map((person) => (
                                    <CollaboratorProfileTile person={person} pending={"pending"}/>
                            ))
                           } 
                        </div> */}

                        {project.contributors && project.contributors.length > 0 ? (
                        <div className='flex flex-col gap-6 mt-4'>
                           {
                            project.contributors.map((person) => (
                                <CollaboratorProfileTile key={person.userId} person={person}/>
                            ))
                           } 
                        </div>
                        ) : <p className='text-gray-500 mt-4'>No collaborators yet.</p>}

                    </div>
                    

                </section>

            </main>
<Footer/>
    </div>

  )
}

export default ProjectDetailsPage