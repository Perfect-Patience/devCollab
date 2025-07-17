import React from 'react'
import ProfileAvatar from './ProfileAvatar';


const imgPath = 'src/assets/stack-icons';

function ProjectTile ({project}) {
    const colors = {
        "Beginner": "#06C91D",
        "Intermediate": "#F8C9FF",
        "Advanced": "#FD7C37"
    }
  return (
    <div className=' p-5 rounded-xl  min-w-[300px] cursor-pointer hover:translate-y-2 duration-300' style={{backgroundColor: 'rgba(217, 217, 217, 0.17)'}}>
        <p className='font-semibold text-lg mb-5'>{project.title}</p>
        <p className=' text-gray-700 line-clamp-4 mb-5'>{project.description}</p>
        <div className='flex mb-5 gap-2.5'>
            {/* creates a path to the images in the assets folder, the images are named according to stack names in the object */}
            {project.stack.map((s,index) => (
                <img key={index} className='w-[25px] h-[25px] contain' src={imgPath + `/` + s + `.svg`} alt={s} />
            ))}
        </div>
        <div className='flex items-center justify-between'>
            <div className='px-4 py-1 w-fit  rounded-sm' style={{backgroundColor: `${colors[project.difficulty]}`}}>
                {project.difficulty}</div>
            <div className='flex items-center gap-3'>
            <ProfileAvatar image={"https://plus.unsplash.com/premium_photo-1661689108279-e046eef0185d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"}/> 
            <p className="truncate">{project.author}</p>
            </div>
            </div>
    </div>
  )
}

export default ProjectTile