import React, { useState } from "react";
import K from "../constants";
import { NavLink } from "react-router";
import { Logo } from "@/assets";
import logo from "../assets/logo.svg";
import Profile from "./Profile";
import { AlignJustify } from "lucide-react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2">
      <div className="h-screen hidden md:flex w-0 md:w-72 p-8 justify-between flex-col border-r-1 border-r-[#E4E4E4] bg-[#4B0084]">
        <div className="flex items-start w-fit  gap-2  flex-col">
          <img className="h-[2.2rem]" src={logo} alt="website logo" />
          <p className="text-white text-lg font-light self-center">Dashboard</p>
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
      {isOpen && (
        <div className="fixed top-14 md:hidden p-4 justify-start w-[100%] flex  bg-[#4B0084]">
          <div className="flex flex-col gap-6 text-white font-semibold">
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
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden block fixed bg-gray-100 p-2.5 text-gray-600 rounded-md">
        <AlignJustify />
      </button>
    </div>
  );
};

export default Sidebar;
