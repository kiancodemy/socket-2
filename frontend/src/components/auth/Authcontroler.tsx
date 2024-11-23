import { Maincontext } from "../../context/Authcontext";
import { Navigate, Outlet } from "react-router-dom";

const Authcontroler = () => {
  const { user } = Maincontext();

  if (user) {
    return <Outlet></Outlet>;
  } else {
    return <Navigate to={"/auth/login"} replace></Navigate>;
  }
};
export default Authcontroler;
