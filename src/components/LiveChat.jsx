import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();

  const ChatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="w-full  h-[300px] m-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {ChatMessages.map((c) => (
          <ChatMessage name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full h-[70px] p-2 ml-2 border border-black"
        onSubmit={(e) => {
          console.log("hello", liveMessage);
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ashutosh Shau",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-40 h-14 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-10 bg-green-800 rounded-lg">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
