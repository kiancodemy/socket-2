import { Button } from "../../components/ui/button";

import { useRef } from "react";
import Gendercheck from "./Gendercheck";
import { useState } from "react";
export default function Signup() {
  const [gender, setGender] = useState("male");

  const username = useRef<HTMLInputElement>(null);
  const pass = useRef<HTMLInputElement>(null);
  const confirm = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  const changeGeender = (e: any) => {
    setGender(e.target.value);
  };

  const submitFunction = () => {};
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form className="flex border-2 rounded-lg bg-opacity-0 gap-y-2 backdrop-blur-md  bg-gray-400 container max-w-[300px] flex-col py-6 px-4 ">
        <div className="text-center">
          <span className="bg-clip-text text-xl capitalize font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Signup chatapp
          </span>
        </div>
        <div className="flex flex-col p-1 gap-y-3">
          <label className=" capitalize text-white">username</label>
          <input
            ref={username}
            type="text"
            placeholder="Username"
            className="rounded-md bg-blue-950 placeholder:text-white focus:text-white focus:outline-2 focus:outline-black p-2"
          />
        </div>
        <div className="flex flex-col p-2 gap-y-3">
          <label className=" capitalize text-white">email</label>
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="rounded-md bg-blue-950 placeholder:text-white focus:text-white focus:outline-2 focus:outline-black p-2"
          />
        </div>

        <div className="flex flex-col p-2 gap-y-3">
          <label className=" capitalize text-white">password</label>
          <input
            ref={pass}
            type="password"
            placeholder="Password"
            className="rounded-md bg-blue-950 placeholder:text-white focus:text-white focus:outline-2 focus:outline-black p-2"
          />
        </div>
        <div className="flex flex-col p-2 gap-y-3">
          <label className=" capitalize text-white">confirm password</label>
          <input
            ref={confirm}
            type="password"
            placeholder="Confirm Password"
            className="rounded-md bg-blue-950 placeholder:text-white focus:text-white focus:outline-2 focus:outline-black p-2"
          />
        </div>
        <Gendercheck
          gender={gender}
          changeGeender={changeGeender}
        ></Gendercheck>

        <Button
          type="submit"
          onClick={submitFunction}
          className="bg-blue-600 capitalize text-white rounded-md hover:bg-blue-800 duration-700"
        >
          sign up
        </Button>
      </form>
    </div>
  );
}
