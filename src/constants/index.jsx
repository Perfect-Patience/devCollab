import { VscSettingsGear } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { BsGraphUpArrow } from "react-icons/bs";

const K = {
    DASHBOARDLINKS: [
        {
            icon: <BsGraphUpArrow size={25}/>,
            name: "Overview",
            path: "/dashboard"
        },
        {
            icon: <HiSquare3Stack3D size={25}/>,
            name: "Projects",
            path: "/dashboard/projects"
        },
        {
            icon: <VscAccount size={25}/>,
            name: "Account",
            path: "/dashboard/account"
        },
        {
            icon: <VscSettingsGear size={25}/>,
            name: "Settings",
            path: "/dashboard/settings"
        }
    ]
}

export default K