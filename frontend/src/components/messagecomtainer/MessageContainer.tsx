import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
export default function MessageContainer() {
  return (
    <div
      className="bg-opacity-0 p-3 bg-clip-content rounded-md  backdrop-blur-md 
bg-gray-400 md:max-w-[600px] max-w-full container"
    >
      <div className="flex gap-x-1 items-center rounded-md p-2 bg-white">
        <h1>to:</h1>
        <h1>ssss</h1>
      </div>
      <Messages></Messages>
      <MessageInput></MessageInput>
    </div>
  );
}
