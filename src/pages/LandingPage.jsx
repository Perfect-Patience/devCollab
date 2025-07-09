import React from "react";
import PurpleNavBar from "../components/PurpleNavBar";
import dev from "../assets/dev2.svg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiBeveledStar } from "react-icons/gi";

function LandingPage() {
  return (
    <>
      <div className="w-full h-fit">
        <section
          id="hero-section"
          className=" max-w-full min-w-full h-fit [background-image:radial-gradient(circle_at_center,_#4B0082_0%,_#10001C_80%,_#10011C_100%)] px-7 py-3.5"
        >
          <PurpleNavBar />
          <div
            className={`w-full h-fit mt-20 flex justify-between  md:flex-row flex-col-reverse`}
          >
            <div className="w-2/3">
              <div className="text-white flex flex-col gap-6 text-6xl font-semibold">
                <h2>Build Together.</h2>
                <h2>Grow Faster.</h2>
              </div>
              <p className="text-white md:w-3/5  w-[80%] mt-15 text-xl">
                Dev Collab connects developers with real-world collaboration
                opportunities. Start or join a project, improve your skills, and
                grow your portfolio—together.
              </p>

              <div className="text-white flex gap-7 mt-10">
                <button className="bg-pink-400  border-2 border-[pink] py-2 px-5 rounded-4xl font-semibold text-[#4B0082]">
                  Find A Project
                </button>
                <button className="border-2 border-[pink] py-2 px-5 rounded-4xl font-semibold">
                  Start Collaborating
                </button>
              </div>
            </div>
            <div
              className=" w-full h-[350px] md:h-[390px] md:w-4/7 lg:h-[490px] lg:w-3/7 flex justify-center items-start"
              style={{
                backgroundImage: `url("src/assets/blob-cropped.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            >
              <img
                className="w-3/7 md:w-3/7 lg:w-4/7 mt-14"
                src={dev}
                alt="vector image of a developer"
              />
            </div>
          </div>
        </section>
        <section className="mt-15 px-10" id="features">
          <h3 className="text-center text-[#4B0082] text-xl font-semibold">
            KEY FEATURES
          </h3>
          <p className="text-center text-3xl mt-6 font-semibold">
            Finding projects and Collaborating made easy
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 mt-15">
            <div className=" h-fit py-3 flex gap-5">
              <div className="w-[6rem]  bg-[#4B0082] rounded-lg flex justify-center items-center">
                <HiOutlineLightBulb className="text-4xl text-white" />
              </div>
              <div className="">
                <p className="font-semibold text-lg">Join real projects</p>
                <p className="text-wrap leading-none text-gray-800 mt-2">
                  Browse open-source or community-led projects and join teams
                  based on your skills and interests.
                </p>
              </div>
            </div>
            <div className=" h-fit py-3 flex gap-5">
              <div className="w-[6rem]  bg-[#4B0082] rounded-lg flex justify-center items-center">
                <HiOutlineLightBulb className="text-4xl text-white" />
              </div>
              <div className="">
                <p className="font-semibold text-lg">Start your own</p>
                <p className="text-wrap leading-none text-gray-800 mt-2">
                  Pitch an idea, set up a team, and start building. Dev Collab
                  helps you structure and launch.{" "}
                </p>
              </div>
            </div>
            <div className=" h-fit py-3  flex gap-5">
              <div className="w-[6rem]  bg-[#4B0082] rounded-lg flex justify-center items-center">
                <HiOutlineLightBulb className="text-4xl text-white" />
              </div>
              <div className="">
                <p className="font-semibold text-lg">Track Contributions</p>
                <p className="text-wrap leading-none text-gray-800 mt-2">
                  Integrated with GitHub. Show off your commits, Issues, pull
                  requests, and progress
                </p>
              </div>
            </div>

            <div className=" h-fit py-3 flex gap-5">
              <div className="w-[6rem]  bg-[#4B0082] rounded-lg flex justify-center items-center">
                <HiOutlineLightBulb className="text-4xl text-white" />
              </div>
              <div className="">
                <p className="font-semibold text-lg">Skill Tags & Roles</p>
                <p className="text-wrap leading-none text-gray-800 mt-2">
                  Specify what skills or roles each project needs; Frontend,
                  Backend, Docs, Design, QA, etc
                </p>
              </div>
            </div>
            <div className=" h-fit py-3 flex gap-5">
              <div className="w-[6rem]  bg-[#4B0082] rounded-lg flex justify-center items-center">
                <HiOutlineLightBulb className="text-4xl text-white" />
              </div>
              <div className="">
                <p className="font-semibold text-lg">Discussion & Feedbacks</p>
                <p className="text-wrap leading-none text-gray-800 mt-2">
                  Each project has a space for idea sharing, reviews, and
                  ongoing team communication.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-15 px-10">
          <h3 className="text-center text-[#4B0082] text-xl font-semibold ">
            HOW IT WORKS
          </h3>
          <div className="flex items-center gap-15">
            <div className="w-1/2 flex flex-col gap-4.5">
              <div className="border-1 border-[#4B0082]  min-h-19   rounded-md flex items-center gap-5 pl-6">
                <div className="border-2 border-[#4B0082] w-15 h-15 rounded-full flex justify-center items-center ">
                  <p className="font-bold text-3xl text-[#4b0082]  text-center align-middle">
                    1
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium">Create a Profile</p>
                  <p className="text-gray-700">
                    Share your skills, interests, and Github Handle
                  </p>
                </div>
              </div>
              <div className="border-1 border-[#4B0082]  min-h-19   rounded-md flex items-center gap-5 pl-6">
                <div className="border-2 border-[#ED9DA0] w-15 h-15 rounded-full flex justify-center items-center ">
                  <p className="font-bold text-3xl text-[#ED9DA0]  text-center align-middle">
                    2
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium">Join or Start a Project</p>
                  <p className="text-gray-700 text-wrap">
                    Explore live projects or launch your own with clear goals
                    and team roles.
                  </p>
                </div>
              </div>
              <div className="border-1 border-[#4B0082]  min-h-19  rounded-md flex items-center gap-5 pl-6">
                <div className="border-2 border-[#4B0082] w-15 h-15 rounded-full flex justify-center items-center ">
                  <p className="font-bold text-3xl text-[#4b0082]  text-center align-middle">
                    3
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium">Collaborate & Learn</p>
                  <p className="text-gray-700">
                    Work on issues, commit code, and learn from your peers.
                  </p>
                </div>
              </div>
              <div className="border-1 border-[#4B0082] min-h-19   rounded-md flex items-center gap-5 pl-6">
                <div className="border-2 border-[#ED9DA0] w-15 h-15 rounded-full flex justify-center items-center ">
                  <p className="font-bold text-3xl text-[#ED9DA0]  text-center align-middle">
                    4
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium">Build Your Portfolio</p>
                  <p className="text-gray-700 w-[80%]">
                    Build real apps, get feedback, and show proof of teamwork
                    and impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <img src="src/assets/teamwork.jpg" alt="" />
            </div>
          </div>
        </section>
        <section id="" className="mt-15 px-30 py-10 bg-gray-200">
          <div className="flex justify-between items-center ">
            <h3 className="text-5xl w-1/2 text-gray-800 font-semibold">
              For Developers Who Want More Than Just Practice
            </h3>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 items-center text-2xl ">
                  {" "}
                  <GiBeveledStar className="text-[#4B0082] text-3xl font-bold" />
                  <span>Real team experience</span>
                </li>
                <li className="flex gap-3 items-center text-2xl ">
                  {" "}
                  <GiBeveledStar className="text-[#4B0082] text-3xl font-bold" />{" "}
                  <span>Resume worthy contributions </span>
                </li>
                <li className="flex gap-3 items-center text-2xl">
                  <GiBeveledStar className="text-[#4B0082] text-3xl font-bold" />
                  <span>Accountabily and learning</span>
                </li>
                <li className="flex gap-3 items-center text-2xl ">
                  <GiBeveledStar className="text-[#4B0082] text-3xl font-bold" />
                  <span>Community Support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-10 px-10">
          <h3 className="text-center text-[#4B0082] text-xl font-semibold ">
            TESTIMONIALS
          </h3>

          <div className="flex gap-6 mt-10">
            <div className="flex  flex-col w-2/6 rounded-md shadow-xl p-4">
              <div className="flex gap-3">
                <div className="bg-[#4B0082] w-[50px] h-[50px] rounded-sm flex items-center justify-center ">
                  <p className="text-white text-2xl font-bold text-center">
                    AJ
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Ama Jackson</p>
                  <p className="text-sm text-gray-400">Frontend Developer</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-700 ">
                  “Dev Collab helped me work on my first team project. I learned
                  Git the real way and landed my first internship.
                </p>
              </div>
            </div>

            <div className="flex  flex-col w-2/6 rounded-md shadow-xl p-4">
              <div className="flex gap-3">
                <div className="bg-[#4B0082] w-[50px] h-[50px] rounded-sm flex items-center justify-center ">
                  <p className="text-white text-2xl font-bold text-center">
                    AJ
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Ama Jackson</p>
                  <p className="text-sm text-gray-400">Frontend Developer</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-700 ">
                  “Dev Collab helped me work on my first team project. I learned
                  Git the real way and landed my first internship.
                </p>
              </div>
            </div>

            <div className="flex  flex-col w-2/6 rounded-md shadow-xl p-4">
              <div className="flex gap-3">
                <div className="bg-[#4B0082] w-[50px] h-[50px] rounded-sm flex items-center justify-center ">
                  <p className="text-white text-2xl font-bold text-center">
                    AJ
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Ama Jackson</p>
                  <p className="text-sm text-gray-400">Frontend Developer</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-700 ">
                  “Dev Collab helped me work on my first team project. I learned
                  Git the real way and landed my first internship.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-15 ">
          <h2 className="text-xl md:text-[2rem] text-[#4B0082] text-center ">
            Join DevCollab Today
          </h2>
          <p className="text-center font-normal text-md mt-2 mb-10">
            Start Building. Start Collaborating.
          </p>
          <button className="border-2 border-[#4b0082] px-8 py-1 rounded-md block mx-auto text-xs font-semibold">
            Join now
          </button>
        </section>
        <section className="bg-[#4B0082] mt-10 h-[10rem] w-full text-xs text-white flex flex-col justify-center  font  -light gap-2">
          <p className="text-center">DevCollab | Community-Driven Dev Growth</p>
          <ul className="flex gap-2 text-white font-light justify-center">
            <li>Github</li>
            <li>|       Discord</li>
            <li>|       Privacy</li>
            <li>|       Terms</li>
          </ul>
          <p className="text-center">@ 2025 DevCollab. Built by devs, for devs.</p>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
