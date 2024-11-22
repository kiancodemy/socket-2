import React from "react";
import Message from "./Message";
import Nochat from "./Nochat";
export default function Messages() {
  const notchat = true;
  return (
    <div className="grow rounded-md p-2 overflow-y-auto ">
      {notchat ? (
        <Nochat></Nochat>
      ) : (
        <div className="bg-white">
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
        </div>
      )}
    </div>
  );
}
