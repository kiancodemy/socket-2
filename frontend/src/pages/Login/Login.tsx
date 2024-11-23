import { Link } from "react-router-dom";
import { useState } from "react";
import { loginfucntion } from "../../hooks/Signupfunction";
import { loginType } from "../../types/types";
import { Maincontext } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
export default function Login() {
  const navigate = useNavigate();
  const { login } = Maincontext();

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ status: Boolean; message: string }>({
    status: false,
    message: "",
  });
  const [input, setInput] = useState<loginType>({
    email: "",
    password: "",
  });

  const submitFunction = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();

    const loginResult = await loginfucntion(input);
    setLoading(false);
    if (loginResult?.status === "fail") {
      setToast({ status: true, message: loginResult?.message });
      setTimeout(() => {
        setToast({ message: "", status: false });
      }, 3000);
      return true;
    }

    login(loginResult.message);
    navigate("/");
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {toast.status && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-error text-white capitalize">
            <span>{toast.message}</span>
          </div>
        </div>
      )}
      {!loading ? (
        <form className="flex shadow-md border-2 rounded-lg bg-opacity-0 gap-y-2 backdrop-blur-md  bg-gray-400 container max-w-[300px] flex-col py-8 px-4 ">
          <div className="text-center">
            <span className="bg-clip-text text-xl capitalize font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Login chatapp
            </span>
          </div>
          <div className="flex flex-col p-2 gap-y-3">
            <label className=" capitalize text-white">Email</label>
            <input
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              type="text"
              placeholder="Username"
              className="rounded-md bg-blue-950 placeholder:text-gray-500 text-white focus:outline-2 focus:outline-black p-3"
            />
          </div>
          <div className="flex flex-col p-2 gap-y-3">
            <label className=" capitalize text-white">Password</label>
            <input
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              type="password"
              placeholder="Password"
              className="rounded-md bg-blue-950 placeholder:text-gray-500 text-white focus:outline-2 focus:outline-black p-3"
            />
          </div>
          <button
            type="submit"
            onClick={submitFunction}
            className="bg-blue-600 py-2 text-white rounded-md hover:bg-blue-800 duration-700"
          >
            Button
          </button>
          <button
            disabled={loading}
            className="capitalize py-2 rounded-md hover:bg-black duration-700"
          >
            <Link to="/auth/signup">
              <span className="bg-clip-text capitalize  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                dont you have acount? signup
              </span>
            </Link>
          </button>
        </form>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}
