import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

function CollaboratorProfileTile({
  person,
  role,
  request,
  isOwner,
  onAccept,
  onReject,
}) {
  const [open, setOpen] = useState(false);
  const isPending = request && request.status === "pending";

  const handleAccept = async () => {
    const success = await onAccept(request._id);
    if (success) setOpen(false);
  };

  const handleReject = async () => {
    const success = await onReject(request._id);
    if (success) setOpen(false);
  };


  const content = (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-4 items-center">
        <div className="w-[40px] h-[40px] rounded-full ">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1661689108279-e046eef0185d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
            alt={person.username}
          />
        </div>
        <div>
          <div className="relative">
            <p className="text-sm font-semibold">{person.username}</p>
            {isPending && (
              <div className="absolute w-2.5 h-2.5 bg-green-600 rounded-full top-0 right-[-10px]"></div>
            )}
          </div>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      {!isOwner && <button>View profile</button>}
    </div>
  );

  if (isOwner && isPending) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="flex w-full text-left">{content}</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Collaboration Request</DialogTitle>
            <DialogDescription>
              <strong>{person.username}</strong> wants to join as a{" "}
              <strong>{role}</strong>.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p className="font-semibold">Message:</p>
            <p className="mt-1 p-2 border rounded-md bg-gray-50 min-h-[50px]">
              {request.message || "No message provided."}
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleReject}>
              Reject
            </Button>
            <Button onClick={handleAccept}>Accept</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="flex w-full">{content}</div>
  );
}

export default CollaboratorProfileTile;