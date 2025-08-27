import React from 'react'
import logo from '../assets/logoipsum-custom-logo-colored.svg';
import bell from '../assets/images/icons8-notification-50.png';
import message from '../assets/images/icons8-message-50.png';
import ProfileAvatar from './ProfileAvatar';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { NavLink } from 'react-router';
import { useState } from 'react';

function BlueNavBar({searchedText, setSearchedText}) {
    const [showInput, setShowInput] = useState(false)
    function search(){
        if(!showInput){
            setShowInput(true)
        }

        else{
            // search
            
            setShowInput(false)
        }
        
    }
  return (
    <div className='w-full bg-[#E9EBFA] h-[5rem] flex justify-between items-center px-4 md:px-10'>
        <NavLink to="/" className={`w-30`}>
            <img src={logo} alt="logo" className={`${showInput? 'hidden': 'block'}  md:block`} />
        </NavLink>
        <div className='flex md:gap-x-20 gap-2 items-center'>
            <div className='md:w-[20rem] h-full bg-white rounded-full flex py-2 px-4'>
                <input type="search" id='searchbar'  className={`md:w-full md:h-full transition-all duration-300 outline-0 ${ showInput? 'block': 'hidden'
                } md:block `} placeholder='What are you looking for?'  value={searchedText} onChange={(e) => setSearchedText( e.target.value)} />
                <button className='  text-xl md:text-2xl' onClick={search}><HiMagnifyingGlass /></button>
            </div>
            <div className='flex items-center gap-3'>
                <NavLink to="/notifications">
                    <img src={bell} alt="notifications" className='h-[20px] md:h-[30px]' />
                </NavLink>
                <NavLink to="/chat">
                    <img src={message} alt="chat" className='h-[20px] md:h-[30px]' />
                </NavLink>
                <NavLink to="/profile">
                    <div className=''>
                        <ProfileAvatar image={"https://plus.unsplash.com/premium_photo-1661689108279-e046eef0185d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"}/>
                    </div>
                </NavLink>
            </div>
        </div>
       
    </div>
  )
}

export default BlueNavBar