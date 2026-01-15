import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const UserList = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md">
          <p className="py-2 px-3">{"Raam" || "UnAssignee"}</p>
        </div>

        {[1, 1, 1, 1].map((_, index) => (
          <div
            key={index}
            className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md borde px-4"
          >
            <Avatar>
              <AvatarFallback>Z</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <p className="text-sm leading-none">@Code with Anurag</p>
              <p className="text-sm text-muted-foreground">@CodewithAnurag</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
