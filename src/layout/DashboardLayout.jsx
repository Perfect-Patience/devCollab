import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

const DashBoardLayout = () => {
  return (
    <div className='md:flex h-screen md:overflow-hidden'>
        <Sidebar />
        <div className='md:px-10 px-4 py-5 flex-1'>
            <Outlet />
        </div>
    </div>
  )
}

export default DashBoardLayout