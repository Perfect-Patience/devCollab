import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    const { username, email, password } = userData;

    try {

      if (!username || !email || !password) {
        return "all the fields are required";
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
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen gap-20">
      <Card className="w-full max-w-sm rounded-none py-0 h-[25rem]">
        <CardHeader className="flex flex-col gap-2 bg-[#DFDCFE] py-2">
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
      <Card className="w-full max-w-sm rounded-none bg-[#DFDCFE] h-[25rem] flex flex-col justify-center space-y-4">
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-5">
            <div className="flex flex-col gap-4">
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
                <Input
                  className={"bg-white text-black"}
                  id="password"
                  type="password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <Button
              
              className="w-full bg-[#4B0082] hover:bg-[#5e4074] cursor-pointer"
            >
              Sign up
            </Button>
            <div className="w-[100%] flex justify-between items-center text-[13px]">
              <span className="w-[35%] h-[1px] block bg-[#676767]"></span>
              <span className="text-[#676767] block">or continue with</span>
              <span className="w-[35%] h-[1px] block bg-[#676767]"></span>
            </div>
            <Button variant="outline" className="w-full cursor-pointer">
              Sign up with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
