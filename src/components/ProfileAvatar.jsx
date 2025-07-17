import React from 'react'

function ProfileAvatar({image}) {
  return (
    <div className='w-[40px] h-[40px] rounded-full'>
        <img src={image} alt="profile" className='contain w-full h-full rounded-full' />

    </div>
  )
}

export default ProfileAvatar