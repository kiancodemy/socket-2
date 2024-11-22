import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
export default function MessageInput() {
  const [Message, setmessage] = useState("");
  return (
    <div className="flex  gap-x-2">
      <input
        type="text"
        onChange={(e: any) => setmessage(e.target.value)}
        className="grow p-2 rounded-md focus:outline-none "
        placeholder="type...."
      />
      <button
        disabled={!Message}
        className=" text-white capitalize disabled:cursor-default cursor-pointer duration-700 bg-blue-600 disabled:bg-gray-400 rounded-md py-2 px-4"
        type="submit"
      >
        <FaTelegramPlane></FaTelegramPlane>
      </button>
    </div>
  );
}
