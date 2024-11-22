import LogoutButton from "../LogoutButton";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
export default function Sidebar() {
  return (
    <div className="hidden md:relative px-2 bg-opacity-0 rounded-md divide-y-2 backdrop-blur-md gap-y-3 md:flex flex-col md:max-w-[300px] container py-4 bg-gray-400 ">
      <SearchInput></SearchInput>

      <Conversations></Conversations>
      <LogoutButton></LogoutButton>
    </div>
  );
}
