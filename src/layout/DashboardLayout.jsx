import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

const DashBoardLayout = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default DashBoardLayout