import React from 'react'
import BlueNavBar from '@/components/BlueNavBar'


import { useState } from 'react';
import ProjectList from '@/components/ProjectList';
import Footer from '@/components/Footer';
function ProjectListingPage() {
const [searchedText, setSearchedText] = useState('');
const [filter, setFilter] = useState("Popular")

  return <>
  <BlueNavBar   searchedText={searchedText} setSearchedText={setSearchedText}  />
  <ProjectList searchedText={searchedText} setFilter={setFilter} filter={filter} />
  <Footer/>
  </>
}

export default ProjectListingPage