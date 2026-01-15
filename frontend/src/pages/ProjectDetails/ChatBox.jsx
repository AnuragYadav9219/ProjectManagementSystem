import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const ChatBox = () => {
  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>
        <ScrollArea className="h-128 w-full p-5 flex gap-3 flex-col">
          {[1, 1, 1, 1].map((item, index) =>
            index % 2 == 0 ? (
              <div className="flex gap-2 mb-2" key={item}>
                <Avatar>
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-e-xl rounded-ss-2xl">
                  <p>Raam</p>
                  <p className="text-gray-300">How are you?</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 mb-2" key={index}>
                <Avatar>
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-s-xl rounded-se-2xl">
                  <p>Raam</p>
                  <p className="text-gray-300">How are you?</p>
                </div>
              </div>
            ),
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default ChatBox;
