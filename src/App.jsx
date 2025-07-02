import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import LandingPage from './pages/LandingPage'



const router = createBrowserRouter([
  {
    path:"/",
    Component: LandingPage
  },
 
])
function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
