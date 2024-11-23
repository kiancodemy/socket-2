import { signupType } from "../../types/types";
import Gendercheck from "./Gendercheck";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Maincontext } from "../../context/Authcontext";
import { signUpfucntion } from "../../hooks/Signupfunction";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [toast, setToast] = useState<{ status: Boolean; message: string }>({
    status: false,
    message: "",
  });
  const [input, setInput] = useState<signupType>({
    username: "",
    email: "",
    password: "",
    confirm: "",
    gender: "male",
  });

  const changeGeender = (e: any) => {
    setInput({ ...input, gender: e.target.value });
  };

  const submitFunction = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setloading(true);
    e.preventDefault();
    const registerResult = await signUpfucntion(input);
    setloading(false);
    if (registerResult?.status === "fail") {
      setToast({ status: true, message: registerResult?.message });
      setTimeout(() => {
        setToast({ message: "", status: false });
      }, 3000);
      return true;
    }
    navigate("/auth/login");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      {toast.status && (
        <div className="z-40 toast toast-top toast-end">
          <div className="alert alert-error text-white capitalize">
            <span>{toast.message}</span>
          </div>
        </div>
      )}
      <form className="flex border-2 rounded-lg bg-opacity-0 backdrop-blur-md  bg-gray-400 container max-w-[300px] flex-col py-6 px-4 ">
        <div className="text-center">
          <span className="bg-clip-text text-xl capitalize font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Signup chatapp
          </span>
        </div>
        <div className="flex flex-col p-1 gap-y-3">
          <label className=" capitalize text-white">username</label>
          <input
            value={input.username}
            onChange={(e) => setInput({ ...input, username: e.target.value })}
            type="text"
            placeholder="Username"
            className="rounded-md bg-blue-950 placeholder:text-gray-500 text-white focus:outline-2 focus:outline-black p-2"
          />
        </div>
        <div className="flex flex-col p-2 gap-y-3">
          <label className=" capitalize text-white">email</label>
          <input
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            type="text"
            placeholder="Email"
            className="rounded-md bg-blue-950 placeholder:text-gray-500 text-white focus:outline-2 focus:outline-black p-2"
          />
        </div>

        <div className="flex flex-col p-2 gap-y-3">
          <label className=" capitalize text-white">password</label>
          <input
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="rounded-md bg-blue-950 placeholder:text-gray-500 text-white focus:outline-2 focus:outline-black p-2"
          />
        </div>
        <div className="flex flex-col p-2 gap-y-3">
          <label className=" capitalize text-white">confirm password</label>
          <input
            value={input.confirm}
            onChange={(e) => setInput({ ...input, confirm: e.target.value })}
            type="password"
            placeholder="Confirm Password"
            className="rounded-md bg-blue-950 placeholder:text-gray-500 text-white focus:outline-2 focus:outline-black p-2"
          />
        </div>
        <Gendercheck
          gender={input.gender}
          changeGeender={changeGeender}
        ></Gendercheck>

        <button
          disabled={loading}
          type="submit"
          onClick={submitFunction}
          className="bg-blue-600 py-2 capitalize text-white rounded-md hover:bg-blue-800 duration-700"
        >
          sign up
        </button>
        <button className="capitalize mt-2 bg-black py-2 rounded-md hover:bg-black duration-700">
          <Link to="/auth/login">
            <span className="bg-clip-text capitalize  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              aleady have acount? login
            </span>
          </Link>
        </button>
      </form>
    </div>
  );
}
