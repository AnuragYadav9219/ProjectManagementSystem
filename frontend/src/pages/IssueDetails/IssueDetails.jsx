import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { useParams } from "react-router-dom";
import CreateCommmentForm from "./CreateCommmentForm";
import CommentCard from "./CommentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const IssueDetails = () => {
  const { projectId, issueId } = useParams();

  const handleUpdateIssueStatus = (status) => {
    console.log(status);
  };

  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-gray-400">
              Create Navbar
            </h1>
            <div className="py-5">
              <h2 className="font-semibold text-gray-400">Description</h2>
              <p className="text-gray-400 text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="mt-5">
              <h1 className="pb-3">Activity</h1>
              <Tabs defaultValue="Comments" className="w-100">
                <TabsList className="mb-5">
                  <TabsTrigger value="all" className="cursor-pointer">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="comments" className="cursor-pointer">
                    Comments
                  </TabsTrigger>
                  <TabsTrigger value="history" className="cursor-pointer">
                    History
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  All make changes to your accont here
                </TabsContent>
                <TabsContent value="comments">
                  <CreateCommmentForm issueId={issueId} />
                  <div className="mt-8 space-y-6">
                    {[1, 1, 1].map((_, index) => (
                      <CommentCard key={index} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  History change your password here
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="To Do" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="light">To Do</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>

          <div className="border rounded-lg">
            <p className="border-b py-3 px-5">Details</p>

            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-28">Assignee</p>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <p>Code with Anurag</p>
                  </div>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-28">Labels</p>
                  <p>None</p>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-28">Status</p>
                  <Badge>in_progress</Badge>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-28">Release</p>
                  <p>15-01-2026</p>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-28">Reporter</p>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <p>Raam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
