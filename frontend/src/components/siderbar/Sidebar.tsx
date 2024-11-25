import LogoutButton from "../Logout/LogoutButton";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

export default function Sidebar() {
  return (
    <div className="hidden overflow-y-auto md:relative px-2 bg-opacity-0 rounded-md backdrop-blur-md md:flex flex-col md:max-w-[300px] container py-4 bg-gray-400 ">
      <SearchInput></SearchInput>
      <div className="divider divider-warning"></div>

      <Conversations></Conversations>
      <LogoutButton></LogoutButton>
    </div>
  );
}
