import React from 'react'
import { BsFunnel } from "react-icons/bs";
import ProjectTile from '@/components/projectTile';
  import { useState } from 'react';

function ProjectList({searchedText, filter, setFilter}) {
  const filters = [
  "Web",
  "Mobile",
  "Desktop",
  "Responsive",
  "React",
  "MERN",
  "Node js",
  "Vue js",
  "Angular Js"
];

const projects = [
   {
    id: 1,
    title: "Task Tracker App",
    description: "A web app to manage daily tasks with deadlines and priorities. Users can add, edit, and delete tasks, as well as mark them as completed. The app includes notifications and persistent storage using Firebase.",
    stack: ["React", "TailwindCSS", "Firebase"],
    difficulty: "Beginner",
    author: "Perfect Patience",
    tags: ["Web", "Responsive", "React","Popular"]
  },
  {
    id: 2,
    title: "Recipe Finder",
    description: "An interactive app that allows users to search for recipes by ingredients or meal type. It fetches data from a public API and lets users save their favorite recipes for later. Clean design and easy navigation make it user-friendly.",
    stack: ["Vue.js", "Axios", "CSS3"],
    difficulty: "Beginner",
    author: "Esther Kwashie",
    tags: ["Web", "Vue js","Popular"]
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "A responsive web app to track income and expenses over time. Features include adding transactions, visualizing spending trends through charts, and setting monthly budgets. Includes backend support with Express and MongoDB.",
    stack: ["React", "Chart.js", "Node.js", "Express"],
    difficulty: "Intermediate",
    author: "Paul Arthur",
    tags: ["Web", "Responsive", "React", "Node js", "Popular"]
  },
  {
    id: 4,
    title: "DevCollab",
    description: "A collaborative platform where developers can connect, create project teams, and contribute to open-source work. Includes chat, real-time collaboration updates, and profile pages. Designed for remote teams and tech communities.",
    stack: ["Next.js", "MongoDB", "TailwindCSS", "Socket.io"],
    difficulty: "Advanced",
    author: "Eunice Asamoah",
    tags: ["Web", "Responsive","Popular"]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, fully responsive portfolio website to showcase personal projects, skills, and contact information. It includes animations, a contact form, and downloadable CV. Optimized for SEO and performance.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    difficulty: "Beginner",
    author: "Abigail Pinto",
    tags: ["Web", "Responsive","Popular"]
  },
  {
    id: 6,
    title: "Blog API",
    description: "A fully functional RESTful API for managing blog posts, categories, and user comments. Includes user authentication, pagination, and validation. Built using MVC architecture and connected to a MongoDB database.",
    stack: ["Node.js", "Express", "MongoDB"],
    difficulty: "Intermediate",
    author: "Salam Aziz",
    tags: ["Node js","Popular"]
  },
  {
    id: 7,
    title: "Real-time Chat App",
    description: "A real-time messaging application where users can join chat rooms, send messages instantly, and see who is online. Built for speed and real-time performance using Firebase Realtime Database and Vue's reactive UI.",
    stack: ["Vue.js", "Firebase", "TailwindCSS"],
    difficulty: "Intermediate",
    author: "Ruth Nyakuman",
    tags: ["Web", "Vue js", "Popular"]
  },
  {
    id: 8,
    title: "Weather Dashboard",
    description: "A sleek weather dashboard that provides real-time and forecast weather data based on user location or city input. Integrates OpenWeatherMap API and features animated icons and responsive layout.",
    stack: ["React", "FastAPI", "Bootstrap"],
    difficulty: "Beginner",
    author: "Irene Toxla",
    tags: ["Web", "Responsive", "React","Popular"]
  },
  {
    id: 9,
    title: "Admin Panel",
    description: "A robust admin dashboard for managing users, roles, and content across a web platform. Features include authentication, data tables, charts, and filtering. Built with a focus on scalability and maintainability.",
    stack: ["AngularJs", "TypeScript", "Node.js", "MongoDB"],
    difficulty: "Advanced",
    author: "Mawuse Akpene",
    tags: ["Web", "Angular Js", "Node js","Popular"]
  },
  {
    id: 10,
    title: "E-commerce Product Page",
    description: "A responsive single product page with image gallery, product details, and an 'add to cart' feature. Includes interactive quantity selector and dynamic price updates.",
    stack: ["React", "TailwindCSS", "Mongoose.js"],
    difficulty: "Intermediate",
    author: "Elizabeth",
    tags: ["Web", "Responsive", "React","Popular"]
  },
  {
    id: 11,
    title: "Fitness Tracker",
    description: "An app that allows users to log workouts, track goals, and view stats over time. Includes charts for performance insights and a calendar view for logs.",
    stack: ["React", "Expo", "Firebase"],
    difficulty: "Advanced",
    author: "Regina Dadzie",
    tags: ["Mobile", "React","Popular"]
  },
  {
    id: 12,
    title: "Job Board App",
    description: "A job listing platform where users can search, filter, and apply to jobs. Employers can post listings and manage applications. Includes role-based access.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    difficulty: "Advanced",
    author: "Efua Yorke",
    tags: ["Web", "Responsive","Popular"]
  },
   {
    id: 13,
    title: "Notes App with Tags",
    description: "A productivity tool for taking and organizing notes with tags, categories, and search functionality. Includes markdown support and dark mode toggle.",
    stack: ["Vue.js", "Pinia", "TailwindCSS"],
    difficulty: "Intermediate",
    author: "Nkumin Asaa Osei",
    tags: ["Web", "Vue js","Popular"]
  },

    {
    id: 14,
    title: "Inventory Management Desktop App",
    description: "A desktop application to manage stock levels, supplier orders, and product categories for small businesses. Features include reporting, low-stock alerts, and secure local storage.",
    stack: ["Electron", "SQLite", "JavaScript"],
    difficulty: "Intermediate",
    author: "David Essien",
    tags: ["Desktop","Popular"]
  },
  {
    id: 15,
    title: "Mobile Banking App",
    description: "A cross-platform mobile app for managing personal finances, transferring money, and viewing transaction history. Includes biometric login and real-time push notifications.",
    stack: ["React Native", "Firebase", "Expo"],
    difficulty: "Advanced",
    author: "Joyce Mensah",
    tags: ["Mobile", "React", "Popular"]
  },
  {
    id: 16,
    title: "MERN Stack Blog Platform",
    description: "A full-stack blogging platform where users can register, write, and manage blog posts. Admins can moderate content. Authentication and authorization included.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    difficulty: "Advanced",
    author: "Kojo Amankwah",
    tags: ["Web", "MERN", "React", "Node js", "Popular"]
  },
  {
    id: 17,
    title: "Desktop Markdown Editor",
    description: "A lightweight desktop markdown editor with real-time preview, export options, and theme support. Ideal for writers and developers who need offline editing.",
    stack: ["Electron", "React", "TailwindCSS"],
    difficulty: "Intermediate",
    author: "Linda Boateng",
    tags: ["Desktop", "React","Popular"]
  }

];

// choose only projects fitting tag
// -1 is alocated for proects with tag popular which will be the default filter when page is opened.
// the state stages to stack arrays index when a filter is clicked.
const [isActive, setIsActive] = useState(-1);  
const filteredProjects = projects.filter((project) => project.tags.includes(filter));


//filter list based on search value
const filtered = filteredProjects.filter((project) => project.title.toLowerCase().includes(searchedText.toLowerCase()))

function handleClick(index,filter){
    setIsActive(index)
    
    setFilter(filter)



}

  return (
    <>
    
    <div className='flex justify-between md:mx-[10rem] mx-8 mt-10 items-center  '>
        <div>
            <button className={`${isActive === -1? 'isActive': ''} relative px-3 py-1 rounded-xs cursor-pointer hover:bg-[#f1f3ff]`} onClick={()=>{handleClick(-1, "Popular")}}>Popular</button>
        </div>
        <div className='lg:flex hidden gap-6'>
            {
                // sets selected filter to the filter state which is coming in as a prop.
                filters.map((filter, index ) => (
                    <button className={`hover:bg-[#f1f3ff] px-3 py-1 rounded-xs cursor-pointer relative ${isActive === index? 'isActive': ''}`} key={index} onClick={() =>{handleClick(index, filter)}}>{filter}</button>
                ))
            }
        </div>
        <div>
            <button className='border-2 border-black rounded-md px-3 py-1 flex items-center gap-2'><BsFunnel />Filter</button>
        </div>
    </div>



    
        {
        //    calling the filtered list to display based on length

        filtered.length > 0?
        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-[10rem] md:mx-[2rem]  mx-4 mt-10 gap-10'>
        
        {filtered.map((project) => (
            <ProjectTile key={project.id} project={project}/>
        )) }
        
    </section>
        : <p className='text-gray-400 text-center mt-20'>No Match Found, Try another Search or Explore available projects</p>
        }
    </>
  )
}

export default ProjectList