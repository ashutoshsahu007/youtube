import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Hello Sahu");
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full  h-[400px] m-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="ashutosh sahu" message="This is namaste" />
      <ChatMessage name="ashutosh sahu" message="This is namaste" />
      <ChatMessage name="ashutosh sahu" message="This is namaste" />
      <ChatMessage name="ashutosh sahu" message="This is namaste" />
      <ChatMessage name="ashutosh sahu" message="This is namaste" />
      <ChatMessage name="ashutosh sahu" message="This is namaste" />
    </div>
  );
};

export default LiveChat;
