import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function conversation() {
  return (
    <div className="hover:bg-blue-700 px-1 flex items-center justify-between rounded-md py-2 text-white">
      <div className="flex justify-center items-center gap-x-1">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
        <h1>kian</h1>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
    </div>
  );
}
