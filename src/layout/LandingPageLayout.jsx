import Footer from '@/components/Footer'
import PurpleNavBar from '@/components/PurpleNavBar'
import React from 'react'
import { Outlet } from 'react-router'

function LandingPageLayout() {
  return (
    <div className=''>
        <div className='absolute w-full  py-6 md:px-20 px-8'>
        <PurpleNavBar/>
        </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LandingPageLayout