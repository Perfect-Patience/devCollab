import React, { useEffect } from 'react'
import { BsFunnel } from "react-icons/bs";
import ProjectTile from '@/components/projectTile';
  import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '@/redux-app/features/project/allProjectsSlice';
function ProjectList({searchedText, filter, setFilter}) {
  const filters = [
  "Web",
  "Mobile",
  "Desktop",
  "Popular",
  "React",
  "MERN",
  "Node js",
  "Vue js",
  "Angular Js"
];


const { projects = [] } = useSelector((state) => state.allProjects);
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getAllProjects());
 
},[dispatch]); // Only dispatch should be in the dependency array if you want it to run once on mount

// choose only projects fitting tag
// -1 is alocated for proects with tag popular which will be the default filter when page is opened.
// the state stages to stack arrays index when a filter is clicked.
const [isActive, setIsActive] = useState(-1);
const filteredProjects = projects.filter((project) => project.tags && project.tags.includes(filter));


//filter list based on search value
const filtered = filteredProjects.filter((project) => project.title.toLowerCase().includes(searchedText.toLowerCase()))

function handleClick(index,filter){
    setIsActive(index)
    
    setFilter(filter)



}

  return (
    <>
    
    <div className='flex justify-between md:mx-[10rem] mx-8 mt-10 items-center  '>
        <div>
            <button className={`${isActive === -1? 'isActive': ''} relative px-3 py-1 rounded-xs cursor-pointer hover:bg-[#f1f3ff]`} onClick={()=>{handleClick(-1, "All")}}>All</button>
        </div>
        <div className='lg:flex hidden gap-6'>
            {
                // sets selected filter to the filter state which is coming in as a prop.
                filters.map((filter, index ) => (
                    <button className={`hover:bg-[#f1f3ff] px-3 py-1 rounded-xs cursor-pointer relative ${isActive === index? 'isActive': ''}`} key={index} onClick={() =>{handleClick(index, filter)}}>{filter}</button>
                ))
            }
        </div>
        <div>
            <button className='border-2 border-black rounded-md px-3 py-1 flex items-center gap-2'><BsFunnel />Filter</button>
        </div>
    </div>



    
        {
        //    calling the filtered list to display based on length

        filtered.length > 0?
        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-[10rem] md:mx-[2rem]  mx-4 mt-10 gap-10'>
        
        {filtered.map((project) => (
            <ProjectTile key={project._id} project={project}/>
        )) }
        
    </section>
        : <p className='text-gray-400 text-center mt-20'>No Match Found, Try another Search or Explore available projects</p>
        }
    </>
  )
}

export default ProjectList