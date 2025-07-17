import React, { useState } from "react";
import K from "../constants";
import { NavLink } from "react-router";
import { Logo } from "@/assets";
import Profile from "./Profile";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <div className="h-screen w-10 md:w-72 p-8 space-y-18 flex flex-col border-r-1 border-r-[#E4E4E4] bg-[#4B0084]">
      <div className="flex items-center gap-2 text-white font-bold text-2xl">
        <img src={Logo} alt="website logo" />
        <span>DevCollab</span>
      </div>
      <div className="flex flex-col gap-10 text-white font-semibold">
        {K.DASHBOARDLINKS.map((item, index) => (
          <NavLink to={item.path} key={index} className="">
            <div
              onClick={() => setActiveItem(item.name)}
              className={`flex gap-4 bg-[#7D0FF2] p-3 rounded-sm hover:bg-white active:bg-white hover:text-[#4B0084] hover:p-3 hover:rounded-sm
                ${
                  activeItem === item.name
                    ? "bg-white text-[#4B0084] p-3 rounded-sm"
                    : "hover:bg-[#7D0FF2] hover:text-[#4B0084]"
                }
                `}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
      <Profile />
    </div>
  );
};

export default Sidebar;
