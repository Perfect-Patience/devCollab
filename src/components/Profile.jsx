import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux-app/features/user/userSlice";
import { useAuth } from "@/hooks/useAuth";

const 
Profile = () => {

  const dispatch = useDispatch();
  const {user} = useAuth()
  console.log(user.user)

  function handleLogout(){
    console.log("logging out...")
    dispatch(logoutUser())
  }
  
  return (
    <div className="bg-white p-4 space-y-5 rounded-sm">
      <div className="flex gap-5 items-center">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <span className="text-lg font-bold">{user.user.username}</span>
      </div>
      <p   className={`text-center ${user.user.email.length > 22 ? "text-sm" : "text-lg"} `}
>{user.user.email}</p>
      <Button className={"bg-[#7D0FF2] w-full hover:bg-white hover:text-[#4B0084] cursor-pointer text-[16px]"} onClick={() => handleLogout()}>Sign out</Button>
      
    </div>
  );
};

export default Profile;
