import Message from "./Message";
import { useRef } from "react";
import Nochat from "./Nochat";
import { usestore } from "../../zustand/store/Store";
import { useEffect } from "react";
import { UsegetAllMessage } from "../../hooks/getAllMessages";
import Loading from "../Loading/Loading";
import { Mainsocket } from "../../context/socketContext";
import audio from "../../assets/2.mp3";

export default function Messages() {
  const {
    conversation,
    setconversaton,
    Message: Messagess,
    setMessage,
  } = usestore();
  const { socket } = Mainsocket();

  const { loading, messages } = UsegetAllMessage();
  const lastMessage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    socket?.on("newMessage", (res: any) => {
      if (res?.sender == conversation?._id) {
        const audios = new Audio(audio);
        audios.play();
        setMessage([...Messagess, res]);
      } else {
        return true;
      }
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [Messagess, setMessage, socket, conversation]);

  useEffect(() => {
    setTimeout(() => {
      lastMessage?.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  useEffect(() => {
    return () => {
      setconversaton(null);
    };
  }, [setconversaton]);

  return (
    <div className="grow flex flex-col rounded-md overflow-y-auto relative ">
      {!conversation?._id ? (
        <Nochat></Nochat>
      ) : loading ? (
        <Loading></Loading>
      ) : !loading && messages.length === 0 ? (
        <div className="bg-white text-black font-black capitalize grow flex justify-center items-center">
          <h1>welcome there is no meesage yet!!</h1>
        </div>
      ) : (
        <div className="bg-white grow p-3 rounded-md">
          {messages?.map((item: any) => {
            return (
              <div key={item?._id} ref={lastMessage}>
                <Message item={item}></Message>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
