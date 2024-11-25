import { UserType } from "../../types/types";
import { usestore } from "../../zustand/store/Store";
export default function conversation({ item }: { item: UserType }) {
  const { conversation, setconversaton } = usestore();

  return (
    <div>
      <div
        onClick={() => setconversaton(item)}
        className={`hover:bg-blue-700 ${
          conversation?._id === item._id && "bg-blue-700"
        } cursor-pointer px-1 flex items-center justify-between rounded-md py-2 text-white`}
      >
        <div className="flex justify-center items-center gap-x-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={item.picture} />
            </div>
          </div>
          <h1>{item.username}</h1>
        </div>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={item.picture} />
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
