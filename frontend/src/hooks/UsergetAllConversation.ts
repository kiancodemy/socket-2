import { useState, useEffect } from "react";

import { UserType } from "../types/types";
export const useGetAllConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, SetConversations] = useState<UserType[]>([]);
  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const PostData = await fetch("http://localhost:4000/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (PostData.ok) {
          const get = await PostData.json();

          SetConversations(get);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);
  return { loading, conversation };
};
