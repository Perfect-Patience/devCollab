import React from "react";
import PurpleNavBar from "../components/PurpleNavBar";
import dev from "../assets/dev2.svg";
import { HiOutlineLightBulb } from "react-icons/hi";

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
          <h3 className="text-center text-[#10011c] text-2xl">Key Features</h3>
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
            <div className=" h-fit py-3 flex gap-5">
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
      </div>
    </>
  );
}

export default LandingPage;
