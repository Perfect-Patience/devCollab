import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashBoardLayout from "./layout/DashboardLayout";
import OverviewPage from "./pages/dashboard/pages/OverviewPage";
import ProjectsPage from "./pages/dashboard/pages/ProjectsPage";
import AccountPage from "./pages/dashboard/pages/AccountPage";
import SettingsPage from "./pages/dashboard/pages/SettingsPage";
import AddProject from "./pages/dashboard/pages/AddProject";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
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
        path: "addProject",
        Component: AddProject
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
