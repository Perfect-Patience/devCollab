import BlueNavBar from '@/components/BlueNavBar';
import React, { useEffect, useState } from 'react'
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
import { fetchProject, getJoinRequests, requestToJoinProject, updateJoinRequestStatus } from '@/redux-app/features/project/projectSlice';
import toast from 'react-hot-toast';

const getIconUrl = (name) => {
  return `/src/assets/stack-icons/${name}.svg`;
};

function ProjectDetailsPage() {
     const { id } = useParams();
  const dispatch = useDispatch(); 
  const [joinMessage, setJoinMessage] = useState('');
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const { project, projectLoading, projectError, collaborationRequests } = useSelector(
    (state) => state.project
  );
  const { user } = useSelector((state) => state.auth);

  const isOwner = user && project && user.user._id === project.ownerId._id;
  const isCollaborator = user && project && project.contributors?.some(contributor => String(contributor.userId._id) === String(user.user._id));
  
  useEffect(() => {
    dispatch(fetchProject(id));
   isOwner && dispatch(getJoinRequests(id));
  }, [dispatch, id, isOwner]);

  const handleJoinRequest = async (e) => {
    e.preventDefault();
    if (!user || !user.user) {
      toast.error("You must be logged in to join a project.");
      return;
    }

    const result = await dispatch(requestToJoinProject({
      projectId: id,
      userId: user.user._id,
      requestedRole: selectedRole,
      message: joinMessage,
    }));

    if (requestToJoinProject.fulfilled.match(result)) {
      toast.success("Your request to join has been sent!");
      setJoinDialogOpen(false);
      setJoinMessage('');
    } else {
      toast.error(result.payload || "Failed to send join request.");
    }
  };

  const handleRespondToRequest = async (requestId, status) => {
  
    const result = await dispatch(updateJoinRequestStatus({
      requestId,
      status,
    }));

    if (updateJoinRequestStatus.fulfilled.match(result)) {
      toast.success(`Request has been ${status}.`);
      dispatch(fetchProject(id));
      dispatch(getJoinRequests(id));
      return true; // Indicate success
    } else {
      toast.error(result.payload || `Failed to ${status} request.`);
      return false; // Indicate failure
    }
  };

  const handleAccept = (requestId) => handleRespondToRequest(requestId, 'accepted');
  const handleReject = (requestId) => handleRespondToRequest(requestId, 'rejected');


  if (projectLoading) {
    return <div>Loading project details...</div>;
  }

  if (projectError) {
    return <div>Error: {projectError.message || "Failed to load project."}</div>;
  }

  if (!project) {
    return <div>Project not found.</div>;
  }
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
                     { !isOwner && (
                       <Dialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen}>
                        <DialogTrigger asChild>
  <button
    className={`px-6 py-1 rounded-md ${isCollaborator ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-[#4B0082] text-white cursor-pointer'}`}
    disabled={isCollaborator}
  >
    {isCollaborator ? "You're a collaborator" : 'Join'}
  </button>
</DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <form onSubmit={handleJoinRequest}>
                            <DialogHeader>
                              <DialogTitle>Join {project.title}</DialogTitle>
                              <DialogDescription>
                                Want to join the {project.title} project?
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                              <div className="grid gap-3">
                                <Label htmlFor="role-select" className='font-normal'>Select Role</Label>
                                <select
                                  id="role-select"
                                  value={selectedRole}
                                  onChange={(e) => setSelectedRole(e.target.value)}
                                  className="border rounded-md p-2"
                                  required
                                >
                                  <option value="">Select a role...</option>
                                  {project.rolesNeeded.map((role) => (
                                    <option key={role} value={role}>
                                      {role}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="grid gap-3">
                                <Label htmlFor="name-1" className='font-normal'>
                                      Let the project admin know why you&apos;re interested in joining this project. (Max 300 characters) Optional
                                </Label>
                                <textarea 
                                  id="name-1"  
                                  rows="4" 
                                  name="name"
                                  value={joinMessage}
                                  onChange={(e) => setJoinMessage(e.target.value)}
                                ></textarea>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button type="button" variant="outline" onClick={() => setJoinDialogOpen(false)}>
                                Cancel
                              </Button>
                              <Button type="submit">Join</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                     )
                      
                     }
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
                        { isOwner && <div className='flex justify-between'>
                          <p className='font-semibold'> Pending Collaborators</p>
                            <div className='relative'>
                                <div className='w-[10px] h-[10px] bg-green-600 rounded-full' ></div>
                                <p className='absolute text-xs top-[-13px] right-[-4px]'>{project.joinRequests.length}</p>
                            </div>
                        </div>}

                        <div className='flex flex-col gap-6 mt-4'>
                           {
                           collaborationRequests.map((request) => (
                                    
                                      request.status === "pending" ? <CollaboratorProfileTile 
                                      key={request._id} 
                                      person={request.user} 
                                      role={request.requestedRole}
                                      request={request}
                                      isOwner={isOwner}
                                      onAccept={handleAccept}
                                      onReject={handleReject}/> : null
                                    
                            ))
                           } 
                        </div>
                          <p className='font-semibold'>Collaborators</p>
                         
                        {project.contributors && project.contributors.length > 0 ? (
                        <div className='flex flex-col gap-6 mt-4'>
                           {
                            project.contributors.map((person) => (
                                <CollaboratorProfileTile key={person._id} person={person.userId}/>
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