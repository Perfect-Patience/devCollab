import BlueNavBar from "@/components/BlueNavBar";
import DashboardHeader from "@/components/DashboardHeader";
import React, { useEffect, useState } from "react";
import { BsDot, BsDash } from "react-icons/bs";
import { FaArrowsAlt } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, profileUpload } from "@/redux-app/features/user/userSlice";
import { api } from "@/config/axios";

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
        label: "GitHub",
        destination: "#",
      },
      {
        label: "Portfolio",
        destination: "#",
      },
      {
        label: "LinkedIn",
        destination: "#",
      },
    ],
  };

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((store) => store.auth);
  const { projects } = useSelector((store) => store.userProjects);

  console.log("projects: ", projects);

  const [userData, setUserData] = useState({
    username: user?.user?.username,
    email: user?.user?.email,
    bio: user?.user?.bio,
    githubProfileLink: user?.user?.githubProfileLink,
    portfolio: user?.user?.portfolio,
    linkedIn: user?.user?.linkedIn,
    techStack: user?.user?.techStack,
    skills: user?.user?.skills,
  });
  const [selectedImage, setSelectedImage] = useState(null);

  console.log("user in account page: ", user);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await api.patch(`/auth/${user.user._id}`, userData);
      dispatch(fetchUser(user.user._id));
      return res.data;
    } catch (error) {
      console.log("error updating user data: ", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSaveProfilePhoto = async () => {
    console.log("user: ", user);
    if (!selectedImage) return alert("Please select an image first.");

    try {
      const formData = new FormData();
      formData.append("avatar", selectedImage);

      // Replace this endpoint with your actual upload API
      await dispatch(profileUpload({userId: user.user._id, userImage: formData}));

      // Refresh user data
      dispatch(fetchUser(user.user._id));
      // console.log("Profile photo updated:", res.data);
    } catch (error) {
      console.error("Error uploading profile photo:", error);
    }
  };

  // useEffect(() => {
  //   if (user && user.user) {
  //     dispatch(fetchUser(user.user._id));
  //   }
  // }, [dispatch, user]);

  return (
    <div className="px-4 overflow-y-scroll overflow-x-hidden h-[100%] bg-[rgba(245,245,245,0.71)]">
      <DashboardHeader
        title={"Account"}
        text={"Find all projects you're part of or join a new project"}
      />
      <section className="py-15 ">
        <div className="bg-white w-full md:h-[15rem] h-fit py-3 md:gap-9 gap-4 justify-evenly lg:gap-9 lg:h-[20rem] flex flex-wrap md:flex-nowrap lg:max-w-[1090px] items-center md:justify-around lg:justify-evenly m-auto  rounded-xl mb-5rem">
          <Dialog>
            <DialogTrigger asChild>
              <div className="md:h-[10rem] md:w-[10rem] lg:h-[15rem] lg:w-[15rem] h-[9rem] w-[9rem] rounded-full bg-[#7D0FF2] flex flex-shrink-0 flex-grow-0 cursor-pointer hover:opacity-80 transition">
                <img
                  className="md:h-[9.5rem] md:w-[9.5rem] lg:h-[14rem] lg:w-[14rem] h-[8rem] w-[8rem] self-center m-auto rounded-full object-cover"
                  src={`${import.meta.env.VITE_API_URL}/${user?.user?.profilePic}`}
                  alt="profile picture"
                />
              </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Update Profile Photo</DialogTitle>
                <DialogDescription>
                  Click below to upload a new profile photo.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col items-center gap-4 mt-3">
                <img
                  src={`${import.meta.env.VITE_API_URL}/${user?.user?.profilePic}`}
                  alt="Current profile"
                  className="h-[10rem] w-[10rem] rounded-full object-cover border-4 border-[#7D0FF2]"
                />
                {selectedImage && (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Preview"
                    className="h-[10rem] w-[10rem] rounded-full object-cover border-2 border-dashed border-gray-400"
                  />
                )}

                <div className="w-full">
                  <Label htmlFor="profile-photo">Choose a new photo</Label>
                  <Input
                    id="profile-photo"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                  />
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={handleSaveProfilePhoto}>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="grid gap-2  w-2/3 ">
            <div className="flex justify-between items-center">
              {user?.user?.email && (
                <p className="md:text-2xl text-lg lg:text-4xl font-semibold ">
                  {user.user.email}
                </p>
              )}
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <button className="cursor-pointer">
                      <FaRegEdit size={25} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      {/* <div className="grid gap-3">
                        <Label htmlFor="first-name-1">First name</Label>
                        <Input
                          id="first-name-1"
                          name="first-name"
                          defaultValue="Pedro Duarte"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="last-name-1">Last name</Label>
                        <Input
                          id="last-name-1"
                          name="last-name"
                          defaultValue="Pedro Duarte"
                        />
                      </div> */}

                      <div className="grid gap-3">
                        <Label htmlFor="bio-1">Biography</Label>
                        <Input
                          id="bio-1"
                          name="bio"
                          defaultValue={userData.bio}
                          onChange={(e) => {
                            setUserData({ ...userData, bio: e.target.value });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="stack-1">Tech Stack</Label>
                        <Input
                          id="stack-1"
                          name="stack"
                          defaultValue={userData.techStack}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="skills-1">Skills</Label>
                        <Input
                          id="skills-1"
                          name="skills"
                          defaultValue={userData.skills}
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              skills: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="github-1">GitHub Link</Label>
                        <Input
                          id="github-1"
                          name="github"
                          defaultValue={userData.githubProfileLink}
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              githubProfileLink: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="portfolio-1">Portfolio Link</Label>
                        <Input
                          id="portfolio-1"
                          name="portfolio"
                          defaultValue={userData.portfolio}
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              portfolio: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="linkedin-1">LinkedIn</Label>
                        <Input
                          id="linkedin-1"
                          name="linkedin"
                          defaultValue={userData.linkedIn}
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              linkedIn: e.target.value,
                            });
                          }}
                        />
                      </div>
                      {/* <div className="grid gap-3">
                        <Label htmlFor="photo-1">Profile photo</Label>
                        <Input
                          id="photo-1"
                          name="photo"
                          type="file"
                          defaultValue="Ghana"
                        />
                      </div> */}
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button type="submit" onClick={handleUpdateUser}>
                          Save changes
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
            <p className="flex items-center lg:text-xl gap-1">
              {user?.user?.username && <span>@{user.user.username}</span>}
              <span className="font-bold text-2xl inline-block">
                <BsDot />
              </span>
              <span>Ghana</span>
            </p>
            {user?.user?.bio && (
              <p className="text-gray-500 lg:text-xl wrap-break-word">
                {user.user.bio}
              </p>
            )}
            <div className="flex gap-4 mt-5 flex-wrap">
              {user?.user?.techStack?.map((stack, index) => (
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
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="flex text-lg gap-2 items-center text-gray-500"
                >
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
              {profileDetails.links.map((link, index) => (
                <li key={index} className="text-[#0015FF] mt-3">
                  {" "}
                  <a href={link.destination}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3  bg-white px-3 md:px-5 md:py-5 py-2 rounded-md w-full">
            <p className="text-xl font-semibold">Skills & Preferences</p>
            <ul className="flex gap-x-10 flex-wrap list-disc text-[#797979] px-10">
              {user?.user?.skills?.map((skills, index) => (
                <li key={index} className="">
                  {skills}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccountPage;
