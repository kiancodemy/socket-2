import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/sigup/Signup";
import Home from "./pages/Home/Home";
export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Routes>
        <Route path="/">
          <Route index element={<Home></Home>}></Route>
          <Route path="auth">
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signup" element={<Signup></Signup>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
