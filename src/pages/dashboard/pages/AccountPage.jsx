import BlueNavBar from "@/components/BlueNavBar";
import DashboardHeader from "@/components/DashboardHeader";
import React from "react";
import { BsDot, BsDash } from "react-icons/bs";
import { FaArrowsAlt } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";

function AccountPage() {
  // using dummy profile details data to prevent repeatition
  const profileDetails = {
    "active-projects": [
      {
        title: "Markdown Editor",
        role: "Contributor",
      },
      {
        title: "Data Dashboard ",
        role: "Owner",
      },
      {
        title: "Markdown Editor",
        role: "Contributor",
      },
    ],
    skilsNPreferences: [
      "Problem Solving",
      "Effective Communication",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind",
    ],
    stack: ["React", "Node.js", "Firebase", "Tailwind"],
    links: [
      {
        "label": "GitHub",
        "destination": "#"
      },
      {
        "label": "Portfolio",
        "destination": "#"
      },
      {
        "label": "LinkedIn",
        "destination": "#"
      }
    ]
  };

  return (
    <div
      className="px-4 overflow-y-scroll overflow-x-hidden h-[100%] bg-[rgba(245,245,245,0.71)]"
    >
      <DashboardHeader
        title={"Account"}
        text={"Find all projects you're part of or join a new project"}
      />
      <section className="py-15 ">
        <div className="bg-white w-full md:h-[15rem] h-fit py-3 md:gap-9 gap-4 justify-evenly lg:gap-9 lg:h-[20rem] flex flex-wrap md:flex-nowrap lg:max-w-[1090px] items-center md:justify-around lg:justify-evenly m-auto  rounded-xl mb-5rem">
          <div className="md:h-[10rem] md:w-[10rem] lg:h-[15rem]  lg:w-[15rem] h-[9rem] w-[9rem]  rounded-full bg-[#7D0FF2] flex flex-shrink-0 flex-grow-0">
            <img
              className="md:h-[9.5rem] md:w-[9.5rem] lg:h-[14rem]  lg:w-[14rem] h-[8rem] w-[8rem]  self-center m-auto rounded-full object-cover"
              src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile picture"
            />
          </div>
          <div className="grid gap-2  w-2/3 ">
            <p className="md:text-2xl text-lg lg:text-4xl font-semibold ">
              Abena Aba Yankson
            </p>
            <p className="flex items-center lg:text-xl gap-1">
              <span>@CrazyDev</span>
              <span className="font-bold text-2xl inline-block">
                <BsDot />
              </span>
              <span>Ghana</span>
            </p>
            <p className="text-gray-500 lg:text-xl wrap-break-word">
              Fullstack developer passionate about building collaborative and
              clean UI
            </p>
            <div className="flex gap-4 mt-5 flex-wrap">
              {profileDetails.stack.map((stack, index) => (
                <button
                  key={index}
                  className="bg-[#E1E7FD] px-4 py-1 rounded-sm text-[#432DD7]"
                >
                  {stack}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1080px] h-fit m-auto mt-[4rem] flex flex-wrap md:flex-nowrap gap-20">
          <div className="bg-white md:w-1/2 w-full px-3 md:px-5 py-2 md:py-5 rounded-md">
            <p className="text-xl font-semibold mb-4 ">Active Projects</p>
            <ul className="flex flex-col gap-2">
              {profileDetails["active-projects"].map((project, index) => (
                <li key={index} className="flex text-lg gap-2 items-center text-gray-500">
                  <span className="text-[#7D0FF2]">
                    <FaArrowsAlt />
                  </span>{" "}
                  <span>{project.title}</span>{" "}
                  <span className="inline-block">
                    <BsDash />
                  </span>
                  <span>{project.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white  w-full md:w-1/2 px-3 md:px-5 md:py-5 py-2 rounded-md">
            <p className="text-xl font-semibold ">Availability</p>
            <p className="text-[#06C91D] flex items-center gap-3 font-medium">
              <span className="text-2xl inline-block">
                <IoCheckbox />
              </span>{" "}
              Open to collaborate
            </p>
            <p className="text-[#797979] flex gap-5">
              <span className="flex gap-3">
                <span>Time zone:</span>
                <span>GMT</span>
              </span>
              <span className="flex gap-3">
                <span>Languages:</span>
                <span>English</span>
              </span>
            </p>
          </div>
        </div>
        <div className="max-w-[1080px] h-fit m-auto mt-[4rem] flex gap-7 flex-wrap md:flex-nowrap">
          <div className="md:w-1/3 bg-white px-3 md:px-5 md:py-5 py-2 rounded-md w-full ">
          <p className="text-xl font-semibold ">Links</p>
              <ul>
                {
                  profileDetails.links.map((link, index) => (
                   <li key={index} className="text-[#0015FF] mt-3"> <a href={link.destination}>{link.label}</a></li>
                  ))
                }
              </ul>
          </div>
          <div className="md:w-2/3  bg-white px-3 md:px-5 md:py-5 py-2 rounded-md w-full">
            <p className="text-xl font-semibold">Skills & Preferences</p>
            <ul className="flex gap-x-10 flex-wrap list-disc text-[#797979] px-10">
              {profileDetails.skilsNPreferences.map((skills, index) => (
                <li key={index} className="">{skills}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccountPage;
