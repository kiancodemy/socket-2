import { MessageType } from "../../types/types";

import { usestore } from "../../zustand/store/Store";

export default function Message({ item }: { item: MessageType }) {
  const { conversation } = usestore();
  return (
    <div
      className={`chat px-2 chat-stary ${
        item.sender === conversation._id ? "chat-start" : "chat-end"
      }`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-bubble">{item.message}</div>
    </div>
  );
}
