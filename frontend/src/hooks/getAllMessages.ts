import { useEffect, useState } from "react";
import { usestore } from "../zustand/store/Store";

export const UsegetAllMessage = () => {
  const { setMessage } = usestore();
  const { conversation, Message } = usestore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getallMeesage = async () => {
      if (conversation?._id) {
        try {
          setLoading(true);
          const PostData = await fetch(
            `http://localhost:4000/api/message/${conversation._id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }
          );

          if (PostData.ok) {
            const get = await PostData.json();

            setMessage(get);
          } else {
            const get = await PostData.json();

            throw new Error(get.message);
          }
        } catch (err) {
          return { message: "failed" };
        } finally {
          setLoading(false);
        }
      }
    };
    getallMeesage();
  }, [conversation?._id]);

  return { loading, messages: Message };
};
