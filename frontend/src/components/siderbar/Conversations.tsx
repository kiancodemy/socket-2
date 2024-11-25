import Conversation from "./conversation";
import { useGetAllConversation } from "../../hooks/UsergetAllConversation";
import Loading from "../Loading/Loading";
export default function Conversations() {
  const { loading, conversation } = useGetAllConversation();

  return (
    <div className="relative grow  py-2 flex flex-col">
      {loading ? (
        <Loading></Loading>
      ) : !loading && conversation.length === 0 ? (
        <h1>there is no user</h1>
      ) : (
        conversation.map((item) => {
          return <Conversation item={item} key={item._id}></Conversation>;
        })
      )}
    </div>
  );
}
