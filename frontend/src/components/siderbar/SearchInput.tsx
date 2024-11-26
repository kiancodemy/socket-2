import { useEffect, useState } from "react";

import { useGetAllConversation } from "../../hooks/UsergetAllConversation";
import { usestore } from "../../zustand/store/Store";
export default function SearchInput() {
  const { setconversaton } = usestore();
  const [search, setSearch] = useState("");
  const { conversation } = useGetAllConversation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        let find = conversation.find((item: any) =>
          item.username.toUpperCase().includes(search.toUpperCase())
        );

        if (find) {
          setconversaton(find);
        }
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search, setconversaton]);

  return (
    <form className="flex gap-x-3">
      <input
        onChange={(e: any) => setSearch(e.target.value)}
        placeholder="search"
        type="text"
        className="rounded-md p-2 focus:outline-blue-500 grow "
      />
    </form>
  );
}
