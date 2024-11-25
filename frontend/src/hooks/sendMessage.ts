import { useState } from "react";
import { usestore } from "../zustand/store/Store";
export const useSendMessage = () => {
  const { Message, setMessage } = usestore();
  const [loading, setlodoading] = useState(false);

  const SendMessage = async (id: string, body: { message: string }) => {
    try {
      setlodoading(true);
      const PostData = await fetch(
        `http://localhost:4000/api/message/send/${id}`,
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (PostData.ok) {
        const get = await PostData.json();

        setMessage([...Message, get]);
      } else {
        const get = await PostData.json();
        throw new Error(get.message);
      }
      return { status: "success" };
    } catch (err) {
      return { status: "failed", message: err.message };
    } finally {
      setlodoading(false);
    }
  };
  return { loading, SendMessage };
};
