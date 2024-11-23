import { createContext, ReactNode, useState, useContext } from "react";

export type Users = {
  user: any;
  logout: () => void;
  login: (username: any) => void;
};
const defaultAuthContext: Users = {
  user: null,
  login: () => {},
  logout: () => {},
};

const Create = createContext<Users | any>(defaultAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "null")
  );
  const login = (username: any) => {
    setUser(username);
    const local = JSON.stringify(username);
    localStorage.setItem("user", local);
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem("user", "null");
  };

  return (
    <Create.Provider value={{ user, login, logout }}>
      {children}
    </Create.Provider>
  );
};

export const Maincontext = () => {
  return useContext(Create);
};
