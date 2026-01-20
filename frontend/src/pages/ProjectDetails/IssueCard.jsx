import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import React from "react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssue } from "@/Redux/Issue/Action";

const IssueCard = ({ item, projectId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIssueDelete = () => {
    dispatch(deleteIssue(item.id));
    console.log("Issue deleted successfully");
  };

  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pb-1">
        <div className="flex justify-between items-center">
          <CardTitle
            className="cursor-pointer"
            onClick={() => navigate(`/project/${projectId}/issue/${item.id}`)}
          >
            {item.title}
          </CardTitle>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full cursor-pointer"
                size="icon"
                variant="ghost"
              >
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer">In Progress</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Done</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleIssueDelete} className="cursor-pointer">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p>FBP - {1}</p>
          <DropdownMenu className="w-120 border border-red-400">
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="bg-gray-900 cursor-pointer hover:text-black text-white rounded-full"
              >
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <UserList issueDetails={item} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;
