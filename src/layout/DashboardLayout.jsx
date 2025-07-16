import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

const DashBoardLayout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <div className='p-10'>
            <Outlet />
        </div>
    </div>
  )
}

export default DashBoardLayout