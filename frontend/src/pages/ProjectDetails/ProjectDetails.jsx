import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";

const ProjectDetails = () => {
  const handleProjectInvitation = () => {};

  return (
    <div className="mt-5 lg:px-10">
      <div className="lg:flex justify-center pb-4">
        <ScrollArea className="h-screen lg:w-[69%] pr-4">
          <div className="text-gray-400 pb-10 w-full space-y-6">
            {/* Title */}
            <h1 className="text-lg font-semibold text-white">
              Create Ecommerce Website using React
            </h1>

            <div className="space-y-5 pb-10 text-sm">
              {/* Description */}
              <p className="md:max-w-lg lg:max-w-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              {/* Project Lead */}
              <div className="flex items-center gap-3">
                <p className="w-36">Project Lead :</p>
                <p>Code</p>
              </div>

              {/* Members */}
              <div className="flex items-center gap-3">
                <p className="w-36">Members :</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <Avatar key={item} className="cursor-pointer">
                      <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleProjectInvitation}
                      className="cursor-pointer ml-2"
                    >
                      <span>Invite</span>
                      <PlusIcon className="w-3 h-3" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Invite User</DialogTitle>
                    </DialogHeader>
                    <InviteUserForm />
                  </DialogContent>
                </Dialog>
              </div>

              {/* Category */}
              <div className="flex items-center gap-3">
                <p className="w-36">Category :</p>
                <p>Full Stack</p>
              </div>

              <div className="flex items-center gap-3">
                <p className="w-36">Project Lead :</p>
                <Badge>Code</Badge>
              </div>
            </div>

            <section>
              <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
              <div className="lg:flex md:flex gap-3 justify-between py-5">
                  <IssueList status="pending" title="Todo List" />
                  <IssueList status="in_progress" title="In Progress" />
                  <IssueList status="done" title="Done" />
              </div>
            </section>
          </div>
        </ScrollArea>

        <div className="lg:w-[30%] rounded-md sticky right-5 top-0">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
