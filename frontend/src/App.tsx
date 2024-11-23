import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/sigup/Signup";
import Home from "./pages/Home/Home";
import Authcontroler from "./components/auth/Authcontroler";
import { lazy, Suspense } from "react";
export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Routes>
        <Route path="/">
          <Route element={<Authcontroler></Authcontroler>}>
            <Route index element={<Home></Home>}></Route>
          </Route>
          <Route path="auth">
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signup" element={<Signup></Signup>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
