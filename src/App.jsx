import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'



const router = createBrowserRouter([
  {
    path:"/",
    Component: LandingPage
  },
  {
    path:"/login",
    Component: LoginPage
  }
])
function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
