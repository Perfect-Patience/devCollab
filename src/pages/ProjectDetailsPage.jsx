import BlueNavBar from '@/components/BlueNavBar';
import React from 'react'
import { useParams } from 'react-router'
import projects from '../../database.json';
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
const imgPath = 'src/assets/stack-icons';

function ProjectDetailsPage() {
    const {id} = useParams();
    const project = projects.find((prod) => prod.id === id);
    console.log(project)
  return (
    <div>
        <BlueNavBar/>
            <main className='max-w-[1000px] m-auto  pt-[2rem] px-9 lg:px-5'>
                <section className='flex justify-between'>
                    <div className='relative w-fit'>
                    <h1 className='text-xl '>{project.title}</h1>
                    <button className='absolute top-[-17px] right-[-55px] rounded-sm text-sm px-2 py-0.3 bg-[#E9EBFA]'>{project.active? 'Active': 'Completed'}</button>
                </div>
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
                </section>
                <section className='grid md:grid-cols-5 grid-cols-1 gap-3 mt-7'>
                    <div className=' w-full h-full md:col-span-3 flex flex-col gap-5 pr-5'>
                        <p className='text-md'>{project.description}</p>
                        <div>
                            <p className='font-semibold'>Github:</p>
                        <a href={project.repo} className='text-blue-700' target='blank'>{project.repo}</a>
                        </div>
                        <div>
                            <p className='font-semibold'>Difficulty</p>
                    <li>{project.difficulty}</li>
                        </div>

                        <div>
                            <p className='font-semibold'>Stack</p>
                            <ul className='flex flex-wrap gap-4'>
                                {project.stack.map((stack) => (
                                    <li className='flex gap-1 items-center'><img className='w-8' src={imgPath + '/'+ stack + '.svg'}/>{stack}</li>
                                ))}
                            </ul>


                        </div>

                        <div>
                            <p className='font-semibold'>Roles</p>
                            
                            <ul className='flex flex-col gap-2 pl-10'>
                                {
                                    project.roles.map((role) => (
                                        <li className='list-disc'>{role}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className=' border-2 border-black rounded-2xl w-full h-fit md:col-span-2 p-6'>
                        <div className='flex justify-between'>
                            <p className='font-semibold'>Collaborators</p>
                            <div className='relative'>
                                <div className='w-[10px] h-[10px] bg-green-600 rounded-full' ></div>
                                <p className='absolute text-xs top-[-13px] right-[-4px]'>{project.pendingCollaborators.length}</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-6 mt-4'>
                           {
                            project.pendingCollaborators.map((person) => (
                                    <CollaboratorProfileTile person={person} pending={"pending"}/>
                            ))
                           } 
                        </div>

                        <div className='flex flex-col gap-6 mt-4'>
                           {
                            project.collaborators.map((person) => (
                                <CollaboratorProfileTile person={person}/>
                            ))
                           } 
                        </div>

                    </div>
                    

                </section>

            </main>
<Footer/>
    </div>
  )
}

export default ProjectDetailsPage