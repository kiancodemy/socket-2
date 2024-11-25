import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useSendMessage } from "../../hooks/sendMessage";
import { usestore } from "../../zustand/store/Store";
export default function MessageInput() {
  const { conversation } = usestore();

  const { loading, SendMessage } = useSendMessage();
  const [Messages, setmessage] = useState("");

  const submitMessage = async () => {
    const SendResult = await SendMessage(conversation._id, {
      message: Messages,
    });

    if (SendResult.status === "success") {
      setmessage("");
      document.getElementById("last")?.scrollIntoView({ behavior: "smooth" });
    } else {
      alert(SendResult.message);
    }
  };

  return (
    <div className={`${conversation?._id ? "flex" : "hidden"} gap-x-2`}>
      <input
        value={Messages}
        type="text"
        onChange={(e: any) => setmessage(e.target.value)}
        className="grow p-2 rounded-md focus:outline-none "
        placeholder="type...."
      />
      <button
        onClick={submitMessage}
        disabled={!Messages || loading}
        className=" text-white flex justify-center items-center capitalize disabled:cursor-default cursor-pointer duration-700 bg-blue-600 disabled:bg-gray-400 rounded-md py-2 px-4"
        type="submit"
      >
        {loading ? (
          <span className="loading loading-dots loading-md"></span>
        ) : (
          <FaTelegramPlane></FaTelegramPlane>
        )}
      </button>
    </div>
  );
}
