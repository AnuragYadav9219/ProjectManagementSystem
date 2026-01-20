import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  fetchChatByProject,
  fetchChatMessages,
  sendMessage,
} from "@/Redux/Chat/Action";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const auth = useSelector((store) => store.auth);
  const chat = useSelector((store) => store.chat);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchChatByProject(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (chat.chat?.id) {
      dispatch(fetchChatMessages(chat.chat.id));
    }
  }, [chat.chat?.id, dispatch]);

  const handleSendMessage = () => {
    dispatch(
      sendMessage({
        senderId: auth.user?.id,
        projectId: id,
        content: message,
      }),
    );
    console.log("Message:", message);
    setMessage("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>

        {/* Messages */}
        <ScrollArea className="h-128 w-full p-5 flex flex-col gap-3">
          {chat.messages?.map((item) =>
            item.sender.id !== auth.user?.id ? (
              <div key={item.id || item._id} className="flex gap-2 justify-start mb-2">
                <Avatar>
                  <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 py-2 px-5 border rounded-e-xl rounded-ss-2xl">
                  <p className="text-sm">{item.sender.fullName}</p>
                  <p className="text-gray-300 text-sm">{item.content}</p>
                </div>
              </div>
            ) : (
              <div key={item.id || item._id} className="flex justify-end gap-2 mb-2">
                <div className="space-y-1 py-2 px-5 border rounded-s-xl rounded-se-2xl">
                  <p className="text-sm">{item.sender.fullName}</p>
                  <p className="text-gray-300 text-sm">{item.content}</p>
                </div>
                <Avatar>
                  <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
                </Avatar>
              </div>
            ),
          )}
        </ScrollArea>

        {/* Input area */}
        <div className="relative">
          <Input
            className="py-7 pr-12 border-t rounded-none border-x-0 border-b-0 focus:ring-0"
            placeholder="Type your message..."
            value={message}
            onChange={handleMessageChange}
          />

          <Button
            onClick={handleSendMessage}
            className="absolute cursor-pointer right-2 top-2 rounded-full"
            size="icon"
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
