import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p className="cursor-pointer">Project Management</p>
        <Dialog>
            <DialogTrigger>
                <Button variant="ghost">New Project</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>Create New Project</DialogHeader>
            </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
