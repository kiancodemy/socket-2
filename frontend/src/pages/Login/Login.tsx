import { Button } from "../../components/ui/button";

import { useRef } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const passw = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  const submitFunction = () => {};
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form className="flex shadow-md border-2 rounded-lg bg-opacity-0 gap-y-6 backdrop-blur-md  bg-gray-400 container max-w-[300px] flex-col py-8 px-4 ">
        <div className="text-center">
          <span className="bg-clip-text text-xl capitalize font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Login chatapp
          </span>
        </div>
        <div className="flex flex-col p-2 gap-y-3">
          <label className=" capitalize text-white">enter username</label>
          <input
            ref={passw}
            type="text"
            placeholder="Username"
            className="rounded-md bg-blue-950 placeholder:text-white focus:text-white focus:outline-2 focus:outline-black p-3"
          />
        </div>
        <div className="flex flex-col p-2 gap-y-3">
          <label className=" capitalize text-white">enter email</label>
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="rounded-md bg-blue-950 placeholder:text-white focus:text-white focus:outline-2 focus:outline-black p-3"
          />
        </div>
        <Button
          type="submit"
          onClick={submitFunction}
          className="bg-blue-600 text-white rounded-md hover:bg-blue-800 duration-700"
        >
          Button
        </Button>
        <Button className="capitalize hover:bg-black duration-700 py-2" asChild>
          <Link to="/auth/signup">
            <span className="bg-clip-text capitalize  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              dont you have acount? signup
            </span>
          </Link>
        </Button>
      </form>
    </div>
  );
}
