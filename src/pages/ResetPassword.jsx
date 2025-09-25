import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoEyeOutline,  IoEyeOffOutline } from "react-icons/io5";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginImg } from "@/assets";
import { api } from "@/config/axios";
import { useNavigate } from "react-router";
import githubIcon from '../assets/GitHub.svg';
import googleIcon from '../assets/Google.svg';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null)

  const active = document.activeElement;
  const navigate = useNavigate();

  const toggleShow = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
      const email = document.querySelector('#email');
      const password = document.querySelector('#password');
    // remove error displayed on screen if user attempts to enter details again.
      if(email === document.activeElement || password === document.activeElement){
        setError(null)
      }
  }, [active])
  useEffect(() => {
    if(showPassword){
      document.querySelector('#password').type = "text"
      
    }
    else{document.querySelector('#password').type = "password"}

  },[showPassword])
  const handleResetPassword = async (e, resetData) => {
    e.preventDefault();

    try {
      if (!password || !confirmPassword) {
        return "Password and confirm password are required";
      }

      const res = await api.patch(`/auth/resetPassword/${resetData.token}`, {
        password,
        confirmPassword,
      });

      if (res.data.message) {
        navigate("/dashboard", { replace: true });
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error)
      console.log("Login error:", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen gap-20 flex-wrap px-3">
      <Card className="w-full max-w-md rounded-none py-0 h-[30rem] border-0 hidden lg:block ">
        <CardHeader className="flex flex-col gap-2 py-2" style={{backgroundColor: "hsla(244, 97%, 93%, 0.35)"}}>
          <CardTitle className="font-normal text-3xl">Welcome to</CardTitle>
          <CardDescription className="text-[#4B0082] font-normal text-5xl">
            DevCollab
          </CardDescription>
          <CardAction className="text-[#676767] text-lg">
            A Lightweigt Project Buddy Finder
          </CardAction>
        </CardHeader>
        <CardContent>
          <img src={LoginImg} alt="Image to show login" />
        </CardContent>
      </Card>
      <Card className="w-full md:max-w-md rounded-none border-0  h-[30rem] flex flex-col justify-center space-y-4" style={{backgroundColor: "hsla(244, 97%, 93%, 0.35)"}}>
        <CardContent>
          <form className="space-y-5" onSubmit={handleResetPassword}>
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-semibold flex gap-8 items-center">
              Enter a new password
              </p>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">New Password</Label>
                </div>
                <div className="relative">
                  <Input
                  className={"bg-white text-black"}
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  
                />
                {showPassword? <IoEyeOutline className="absolute top-1.5 right-4 text-xl" onClick={toggleShow}/> :<IoEyeOffOutline className="absolute top-1.5 right-4 text-xl" onClick={toggleShow}/> }
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <div className="relative">
                  <Input
                  className={"bg-white text-black"}
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  
                />
                {showPassword? <IoEyeOutline className="absolute top-1.5 right-4 text-xl" onClick={toggleShow}/> :<IoEyeOffOutline className="absolute top-1.5 right-4 text-xl" onClick={toggleShow}/> }
                </div>
              </div>
            </div>
            {error? error.response?.data?.message?  <p className="outline-2 outline-red-200 rounded-md px-4 py-0.5 w-fit text-red-500"> ! {error.response?.data?.message} </p> :<p className="outline-2 outline-red-200 rounded-md px-4 py-0.5 w-fit text-red-500"> Something went wrong. Please try again later</p> : null}
            <Button
              type="submit"
              className="w-full bg-[#4B0082] hover:bg-[#5e4074]"
            >
              Reset Password
            </Button>
            <div className="w-[100%] flex justify-between items-center text-[13px]">
              <span className="w-[35%] h-[1px] block bg-[#676767]"></span>
              <span className="text-[#676767] block">or continue with</span>
              <span className="w-[35%] h-[1px] block bg-[#676767]"></span>
            </div>
            <div className="mx-auto w-fit ">
              <Button variant="outline" className="w-15 h-15 mr-10 cursor-pointer">
              <img src={googleIcon} alt="google icon" className="w-full h-full"/>
            </Button>
            <Button variant="outline" className="w-15 h-15 cursor-pointer">
              <img src={githubIcon} alt="github icon" className="w-full h-full" />
            </Button>
            </div>
            <div className="w-fit mx-auto ">
              <a href="/signup" className="">Don't have an account? <span className="text-blue-800">Sign up here</span></a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
