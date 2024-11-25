import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { usestore } from "../../zustand/store/Store";

export default function MessageContainer() {
  const { conversation } = usestore();

  return (
    <div
      className="bg-opacity-0 gap-y-3 flex flex-col p-3 bg-clip-content rounded-md  backdrop-blur-md 
bg-gray-400 md:max-w-[600px] max-w-full container"
    >
      <div className="flex gap-x-1 items-center rounded-md p-2 bg-white">
        <h1>to:</h1>
        <h1>{conversation?.username}</h1>
      </div>
      <Messages></Messages>
      <MessageInput></MessageInput>
    </div>
  );
}
