import { CiLogout } from "react-icons/ci";

import { Maincontext } from "../../context/Authcontext";
import { logoutFunction } from "../../hooks/Signupfunction";
export default function LogoutButton() {
  const { logout } = Maincontext();
  const LogoutFunctions = async () => {
    const logoutt = await logoutFunction();
    if (logoutt) {
      logout();
    }
  };
  return (
    <div>
      <button
        onClick={LogoutFunctions}
        className="text-white font-bold text-2xl mt-2"
      >
        <CiLogout></CiLogout>
      </button>
    </div>
  );
}
