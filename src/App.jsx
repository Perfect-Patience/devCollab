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
import About from "./pages/AboutPage";
import LandingPageLayout from "./layout/LandingPageLayout";
import HowItWorksPage from "./pages/HowItWorksPage";
import ProjectListingPage from "./pages/ProjectListingPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ProjectDetailsAdminView from "./pages/ProjectDetailsAdminView";
import MessagePage from "./pages/MessagePage";
import NotificationPage from "./pages/NotificationPage";
import SignupPage from "./pages/SignupPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux-app/features/user/userSlice";
import { PrivateRoute, PublicRoute } from "./helpers/routeProtect";
import ForgotPassword from "./pages/ForgotPassowrd";
import ResetPassword from "./pages/ResetPassword";


const router = createBrowserRouter([
  {
    path: "/",
    element:(
<LandingPageLayout/>
     ),
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "HowItWorks",
        Component: HowItWorksPage,
      },
    ],
  },
  {
    path: "/login",
    element: <PublicRoute>
      <LoginPage/>
    </PublicRoute>
  },
  {
     path: "/signup",
    element: <PublicRoute>
      <SignupPage/>
    </PublicRoute>
  },
  {
    path: "/forgotPassword",
    Component: ForgotPassword,
  },
  {
    path: "/resetPassword",
    Component: ResetPassword,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashBoardLayout/>
    </PrivateRoute>,
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
        Component: AddProject,
      },
      {
        path: "account",
        Component: AccountPage,
      },
      {
        path: "settings",
        Component: SettingsPage,
      },
    ],
  },
  {
    path: "explore",
    element: 
      <ProjectListingPage/>
    ,
  },
  {
    path: "profile",
    Component: ProfilePage,
  },
  {
    path: "/:id",
    Component: ProjectDetailsPage,
  },
  {
    path: "/admin/:id",
    Component: ProjectDetailsAdminView,
  },
  {
    path: "/chat",
    Component: MessagePage,
  },
  {
    path: "/notifications",
    Component: NotificationPage,
  },
]);
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])
  return <RouterProvider router={router} />;
}

export default App;
