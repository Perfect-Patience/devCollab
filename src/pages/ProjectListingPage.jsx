import React from 'react'
import BlueNavBar from '@/components/BlueNavBar'
import { BsFunnel } from "react-icons/bs";
import ProjectTile from '@/components/projectTile';
function ProjectListingPage() {
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
  { id:1,
    title: "Task Tracker App",
    description: "A web app to manage daily tasks with deadlines and priorities. Users can add, edit, and delete tasks, as well as mark them as completed. The app includes notifications and persistent storage using Firebase.",
    stack: ["React", "TailwindCSS", "Firebase"],
    difficulty: "Beginner",
    author: "Perfect Patience"
  },
  {
    id:2,
    title: "Recipe Finder",
    description: "An interactive app that allows users to search for recipes by ingredients or meal type. It fetches data from a public API and lets users save their favorite recipes for later. Clean design and easy navigation make it user-friendly.",
    stack: ["Vue.js", "Axios", "CSS"],
    difficulty: "Beginner",
    author: "Esther Kwashie"
  },
  {
    id:3,
    title: "Expense Tracker",
    description: "A responsive web app to track income and expenses over time. Features include adding transactions, visualizing spending trends through charts, and setting monthly budgets. Includes backend support with Express and MongoDB.",
    stack: ["React", "Chart.js", "Node.js", "Express"],
    difficulty: "Intermediate",
    author: "Paul Arthur"
  },
  {
    id:4,
    title: "DevCollab",
    description: "A collaborative platform where developers can connect, create project teams, and contribute to open-source work. Includes chat, real-time collaboration updates, and profile pages. Designed for remote teams and tech communities.",
    stack: ["Next.js", "MongoDB", "TailwindCSS", "Socket.io"],
    difficulty: "Advanced",
    author: "Eunice Asamoah"
  },
  {
    id:5,
    title: "Portfolio Website",
    description: "A modern, fully responsive portfolio website to showcase personal projects, skills, and contact information. It includes animations, a contact form, and downloadable CV. Optimized for SEO and performance.",
    stack: ["HTML", "CSS", "JavaScript"],
    difficulty: "Beginner",
    author: "Abigail Pinto"
  },
  {
    id:6,
    title: "Blog API",
    description: "A fully functional RESTful API for managing blog posts, categories, and user comments. Includes user authentication, pagination, and validation. Built using MVC architecture and connected to a MongoDB database.",
    stack: ["Node.js", "Express", "MongoDB"],
    difficulty: "Intermediate",
    author: "Salam Aziz"
  },
  {
    id:7,
    title: "Real-time Chat App",
    description: "A real-time messaging application where users can join chat rooms, send messages instantly, and see who is online. Built for speed and real-time performance using Firebase Realtime Database and Vue's reactive UI.",
    stack: ["Vue.js", "Firebase", "TailwindCSS"],
    difficulty: "Intermediate",
    author: "Ruth Nyakuman"
  },
  {
    id:8,
    title: "Weather Dashboard",
    description: "A sleek weather dashboard that provides real-time and forecast weather data based on user location or city input. Integrates OpenWeatherMap API and features animated icons and responsive layout.",
    stack: ["React", "FastAPI", "Bootstrap"],
    difficulty: "Beginner",
    author: "Irene Toxla"
  },
  {
    id:9,
    title: "Admin Panel",
    description: "A robust admin dashboard for managing users, roles, and content across a web platform. Features include authentication, data tables, charts, and filtering. Built with a focus on scalability and maintainability.",
    stack: ["AngularJs", "TypeScript", "Node.js", "MongoDB"],
    difficulty: "Advanced",
    author: "Mawuse Akpene"
  }, 
    {
        id:10,
    title: "E-commerce Product Page",
    description: "A responsive single product page with image gallery, product details, and an 'add to cart' feature. Includes interactive quantity selector and dynamic price updates.",
    stack: ["React", "TailwindCSS", "LocalStorage"],
    difficulty: "Intermediate",
    author: "Elizabeth "
  },
   {
    id:11,
    title: "Fitness Tracker",
    description: "An app that allows users to log workouts, track goals, and view stats over time. Includes charts for performance insights and a calendar view for logs.",
    stack: ["React Native", "Expo", "Firebase"],
    difficulty: "Advanced",
    author: "Regina Dadzie"
  },
  {
    id:12,
    title: "Job Board App",
    description: "A job listing platform where users can search, filter, and apply to jobs. Employers can post listings and manage applications. Includes role-based access.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    difficulty: "Advanced",
    author: "Efua Yorke"
  },
   {
    id:13,
    title: "Notes App with Tags",
    description: "A productivity tool for taking and organizing notes with tags, categories, and search functionality. Includes markdown support and dark mode toggle.",
    stack: ["Vue", "Pinia", "TailwindCSS"],
    difficulty: "Intermediate",
    author: "Nkumin Asaa Osei"
  },

];


  return (
    <>
    <BlueNavBar/>
    <div className='flex justify-between md:mx-[10rem] mx-8 mt-10 items-center  '>
        <div>
            <button>Popular</button>
        </div>
        <div className='lg:flex hidden gap-6'>
            {
                filters.map((filter, index ) => (
                    <button className='' key={index}>{filter}</button>
                ))
            }
        </div>
        <div>
            <button className='border-2 border-black rounded-md px-3 py-1 flex items-center gap-2'><BsFunnel />Filter</button>
        </div>
    </div>

    <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-[10rem] md:mx-[2rem]  mx-4 mt-10 gap-10'>
        {
            projects.map((project) =>(
                <ProjectTile key={project.id} project={project}/>
            ))
        }
    </section>
    </>
  )
}

export default ProjectListingPage