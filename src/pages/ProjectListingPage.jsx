import React from 'react'
import BlueNavBar from '@/components/BlueNavBar'
import { useState } from 'react';
import ProjectList from '@/components/ProjectList';
import Footer from '@/components/Footer';
function ProjectListingPage() {
const [searchedText, setSearchedText] = useState('');
const [filter, setFilter] = useState("All");

  return (
    <div>
        <BlueNavBar searchedText={searchedText} setSearchedText={setSearchedText}/>
        <ProjectList searchedText={searchedText} filter={filter} setFilter={setFilter}/>
        <Footer/>
    </div>
  )
}

export default ProjectListingPage