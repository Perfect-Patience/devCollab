import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        return "Email and password are required"
      }
  
      const res = await api.post('/auth/login', {
        email,
        password
      });
  
      if(res.data.message) {
        navigate('/dashboard', {replace: true})
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      console.log("Login error:", error)
    }
  }
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
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className={"bg-white text-black"}
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  className={"bg-white text-black"}
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button
            type="submit"
            className="w-full bg-[#4B0082] hover:bg-[#5e4074]"
          >
            Login
          </Button>
          <div className="w-[100%] flex justify-between items-center text-[13px]">
            <span className="w-[35%] h-[1px] block bg-[#676767]"></span>
            <span className="text-[#676767] block">or continue with</span>
            <span className="w-[35%] h-[1px] block bg-[#676767]"></span>
          </div>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          </form>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default LoginPage;
