import Conversation from "./conversation";
export default function Conversations() {
  return (
    <div className=" grow overflow-y-auto py-2 flex flex-col">
      <Conversation></Conversation>

      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>

      <Conversation></Conversation>
    </div>
  );
}
