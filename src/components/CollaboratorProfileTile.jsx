import React from 'react'
import { IoClose } from "react-icons/io5";
function CollaboratorProfileTile({person, pending}) {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-4'>
            <div className='w-[40px] h-[40px] rounded-full '>
                <img className='w-full h-full object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1661689108279-e046eef0185d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt={person.name} />
            </div>
            <div>
<div className='relative'>
                <p className='text-sm font-semibold'>{person.userId.username}</p>
                    {pending? <div className='absolute w-2.5 h-2.5 bg-green-600 rounded-full top-0 right-0'></div> : ""}
</div>

                <p>{person.role}</p>
            </div>
        </div>
        <button><IoClose /></button>
    </div>
  )
}

export default CollaboratorProfileTile