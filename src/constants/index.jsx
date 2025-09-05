import { VscSettingsGear } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { BsGraphUpArrow } from "react-icons/bs";

const K = {
  DASHBOARDLINKS: [
    {
      icon: <BsGraphUpArrow size={25} />,
      name: "Overview",
      path: "/dashboard",
    },
    {
      icon: <HiSquare3Stack3D size={25} />,
      name: "Projects",
      path: "/dashboard/projects",
    },
    {
      icon: <VscAccount size={25} />,
      name: "Account",
      path: "/dashboard/account",
    },
    {
      icon: <VscSettingsGear size={25} />,
      name: "Settings",
      path: "/dashboard/settings",
    },
  ],
  chartData: [
    { month: "Jan", desktop: 100 },
    { month: "Feb", desktop: 35 },
    { month: "Mar", desktop: 50 },
    { month: "Apr", desktop: 15 },
    { month: "May", desktop: 10 },
    { month: "Jun", desktop: 73 },
    { month: "Jul", desktop: 120 },
    { month: "Aug", desktop: 112 },
    { month: "Sep", desktop: 51 },
    { month: "Oct", desktop: 102 },
    { month: "Nov", desktop: 18 },
    { month: "Dec", desktop: 50 },
  ],
};

export default K;
