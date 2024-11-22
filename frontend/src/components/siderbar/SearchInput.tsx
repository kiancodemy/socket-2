import { IoIosSearch } from "react-icons/io";
export default function SearchInput() {
  return (
    <div className="flex gap-x-3">
      <input
        placeholder="search"
        type="text"
        className="rounded-md p-2 focus:outline-blue-500 grow "
      />
      <button className="bg-blue-600 self-start text-white rounded-full p-2">
        <IoIosSearch></IoIosSearch>
      </button>
    </div>
  );
}
