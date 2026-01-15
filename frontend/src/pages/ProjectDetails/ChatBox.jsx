// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { PaperPlaneIcon } from "@radix-ui/react-icons";
// import React, { useState } from "react";

// const ChatBox = () => {
//   const [message, setMessage] = useState("")
//   const handleSendMessage = () => {
//     console.log("Message : ", message)
//   }

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   }

//   return (
//     <div className="sticky">
//       <div className="border rounded-lg">
//         <h1 className="border-b p-5">Chat Box</h1>
//         <ScrollArea className="h-128 w-full p-5 flex gap-3 flex-col">
//           {[1, 1, 1, 1].map((_, index) =>
//             index % 2 == 0 ? (
//               <div className="flex gap-2 justify-start mb-2" key={index}>
//                 <Avatar>
//                   <AvatarFallback>R</AvatarFallback>
//                 </Avatar>
//                 <div className="space-y-2 py-2 px-5 border rounded-e-xl rounded-ss-2xl">
//                   <p>Raam</p>
//                   <p className="text-gray-300">How are you?</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex justify-end gap-2 mb-2" key={index}>
//                 <div className="space-y-2 py-2 px-5 border rounded-s-xl rounded-se-2xl">
//                   <p>Raam</p>
//                   <p className="text-gray-300">How are you?</p>
//                 </div>
//                 <Avatar>
//                   <AvatarFallback>R</AvatarFallback>
//                 </Avatar>
//               </div>
//             ),
//           )}
//         </ScrollArea>

//         <div className="relative p-0">
//           <Input
//             className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
//             placeholder="Type your message..."
//             value={message}
//             onChange={handleMessageChange}
//           >
//             <Button
//               onClick={handleSendMessage}
//               className="absolute right-2 top-3 rounded-full"
//               size="icon"
//               variant="ghost"
//             >
//               <PaperPlaneIcon />
//             </Button>
//           </Input>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBox;















import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const ChatBox = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
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
          {[1, 1, 1, 1].map((_, index) =>
            index % 2 === 0 ? (
              <div
                key={index}
                className="flex gap-2 justify-start mb-2"
              >
                <Avatar>
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <div className="space-y-1 py-2 px-5 border rounded-e-xl rounded-ss-2xl">
                  <p className="text-sm">Raam</p>
                  <p className="text-gray-300 text-sm">
                    How are you?
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex justify-end gap-2 mb-2"
              >
                <div className="space-y-1 py-2 px-5 border rounded-s-xl rounded-se-2xl">
                  <p className="text-sm">Raam</p>
                  <p className="text-gray-300 text-sm">
                    How are you?
                  </p>
                </div>
                <Avatar>
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
              </div>
            )
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
