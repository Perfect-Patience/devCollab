import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import githubIcon from "../assets/GitHub.svg";
import googleIcon from "../assets/Google.svg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginImg } from "@/assets";
import { api } from "@/config/axios";
import { useNavigate } from "react-router";
const SignupPage = () => {
  const navigate = useNavigate();
  

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null)
  const active = document.activeElement;
  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const username = document.querySelector("#username");
        const confirmPassword = document.querySelector('#confirmPassword')
      // remove error displayed on screen if user attempts to enter details again.
        if(email === document.activeElement || password === document.activeElement || confirmPassword === document.activeElement || username === document.activeElement){
          setError(null)
        }
    }, [active])
  
  const handleSignup = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = userData;

    
    try {
      if (!username || !email || !password || !confirmPassword) {
        setError("all fields required")
        return "all the fields are required";
      }
      if(password != confirmPassword){
        setError("Passwords do not match!!")
        return "passwords do not match!!"
      }

      const res = await api.post("/auth/signup", {
        username,
        email,
        password,
      });

      console.log("response:", res.data);

      if (res.data.message) {
        navigate("/login");
      }

      setUserData({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      setError(error)
      console.log("error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-3">
      <div className="h-fit flex gap-20 justify-center items-center w-full ">
      <Card className="w-full max-w-md rounded-none py-0 min-h-[37rem]  h-full border-0 hidden lg:block ">
        <CardHeader
          className="flex flex-col gap-2 py-2"
          style={{ backgroundColor: "hsla(244, 97%, 93%, 0.35)" }}
        >
          <CardTitle className="font-normal text-3xl">Welcome to</CardTitle>
          <CardDescription className="text-[#4B0082] font-normal text-5xl">
            DevCollab
          </CardDescription>
          <CardAction className="text-[#676767] text-xl">
            A Lightweigt Project Buddy Finder
          </CardAction>
        </CardHeader>
        <CardContent>
          <img src={LoginImg} alt="Image to show login" />
        </CardContent>
      </Card>
      <Card
        className="w-full md:max-w-md rounded-none border-0  min-h-[30rem] flex flex-col justify-center space-y-4"
        style={{ backgroundColor: "hsla(244, 97%, 93%, 0.35)" }}
      >
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-5">
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold flex gap-8 items-center">
                Sign up to continue
              </p>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="username">Username</Label>
                </div>
                <Input
                  className={"bg-white text-black"}
                  id="username"
                  type="text"
                  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  placeholder="Please enter a username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className={"bg-white text-black"}
                  id="email"
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Input
                    className={"bg-white text-black"}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    required
                  />
                  {showPassword ? (
                    <IoEyeOutline
                      className="absolute top-1.5 right-4 text-xl"
                      onClick={toggleShow}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="absolute top-1.5 right-4 text-xl"
                      onClick={toggleShow}
                    />
                  )}
                </div>
              </div>
              

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <div className="relative">
                  <Input
                    className={"bg-white text-black"}
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={userData.confirmPassword}
                    onChange={(e) =>
                      setUserData({ ...userData, confirmPassword: e.target.value })
                    }
                    required
                  />
                  {showPassword ? (
                    <IoEyeOutline
                      className="absolute top-1.5 right-4 text-xl"
                      onClick={toggleShow}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="absolute top-1.5 right-4 text-xl"
                      onClick={toggleShow}
                    />
                  )}
                </div>
              </div>
            </div>

                  {error? error.message? <p className="outline-2 outline-red-200 rounded-md px-4 py-0.5 w-fit text-red-500">{error.message}. Please try again later</p> : <p className="outline-2 outline-red-200 rounded-md px-4 py-0.5 w-fit text-red-500"> {error}</p> : null}
            <Button className="w-full bg-[#4B0082] hover:bg-[#5e4074] cursor-pointer">
              Sign up
            </Button>
            <div className="w-[100%] flex justify-between items-center text-[13px]">
              <span className="w-[35%] h-[1px] block bg-[#676767]"></span>
              <span className="text-[#676767] block">or continue with</span>
              <span className="w-[35%] h-[1px] block bg-[#676767]"></span>
            </div>
            <div className="mx-auto w-fit ">
              <Button
                variant="outline"
                className="w-15 h-15 mr-10 cursor-pointer"
              >
                <img
                  src={googleIcon}
                  alt="google icon"
                  className="w-full h-full"
                />
              </Button>
              <Button variant="outline" className="w-15 h-15 cursor-pointer">
                <img
                  src={githubIcon}
                  alt="github icon"
                  className="w-full h-full"
                />
              </Button>
            </div>
            <div className="w-fit mx-auto ">
              <a href="/login" className="">
                Already have an account?{" "}
                <span className="text-blue-800">Login here</span>
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default SignupPage;
