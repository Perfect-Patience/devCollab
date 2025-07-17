import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

const DashBoardLayout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <div className='px-10 py-5'>
            <Outlet />
        </div>
    </div>
  )
}

export default DashBoardLayout