import Message from "./Message";
import Nochat from "./Nochat";
import { usestore } from "../../zustand/store/Store";
import { useEffect } from "react";
import { UsegetAllMessage } from "../../hooks/getAllMessages";
import Loading from "../Loading/Loading";

export default function Messages() {
  const { conversation, setconversaton } = usestore();
  const { loading, messages } = UsegetAllMessage();

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
      ) : (
        <div className="bg-white grow p-3 rounded-md">
          {messages?.map((item: any) => {
            return <Message key={item?._id} item={item}></Message>;
          })}
          <h1 id="last"></h1>
        </div>
      )}
    </div>
  );
}
