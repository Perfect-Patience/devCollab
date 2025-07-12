import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashBoardLayout from "./layout/DashboardLayout";
import OverviewPage from "./pages/dashboard/pages/OverviewPage";
import ProjectsPage from "./pages/dashboard/pages/ProjectsPage";
import AccountPage from "./pages/dashboard/pages/AccountPage";
import SettingsPage from "./pages/dashboard/pages/SettingsPage";
import About from "./pages/AboutPage";
import LandingPageLayout from "./layout/LandingPageLayout";
import HowItWorksPage from "./pages/HowItWorksPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPageLayout,
    children:[
      {
        index: true,
        Component: LandingPage
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "HowItWorks",
        Component: HowItWorksPage
      }
    ]
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: DashBoardLayout,
    children: [
      {
        index: true,
        Component: OverviewPage,
      },
      {
        path: "projects",
        Component: ProjectsPage,
      },
      {
        path: "account",
        Component: AccountPage,
      },
      {
        path: "settings",
        Component: SettingsPage
      }
    ],
  },
  
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
