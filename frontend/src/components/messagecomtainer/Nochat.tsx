import { IoMdChatbubbles } from "react-icons/io";
import { Maincontext } from "../../context/Authcontext";
export default function Nochat() {
  const { user } = Maincontext();

  return (
    <div className="flex justify-center h-full text-white items-center">
      <div className="flex text-center flex-col gap-y-3 text-lg md:text-2xl capitalize">
        <p>hi {user.username} you have selected any chat !!!</p>
        <p className=" flex flex-col items-center gap-y-4">
          <span>start selecting👈</span>
          <IoMdChatbubbles className="text-3xl"></IoMdChatbubbles>
        </p>
      </div>
    </div>
  );
}
