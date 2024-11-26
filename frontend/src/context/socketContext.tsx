import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import { Maincontext } from "./Authcontext";
import { ReactNode } from "react";
const Socketcontext = createContext<{ socket: any; OnlineUsers: string[] }>({
  socket: null,
  OnlineUsers: [],
});
export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const { user } = Maincontext();
  const [socket, SetSocket] = useState<any>(null);

  const [OnlineUsers, SetOnlineUsers] = useState([]);

  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:4000", {
        query: { userid: user._id },
      });
      SetSocket(socket);
      socket.on("allOnlineUsers", (user) => {
        SetOnlineUsers(user);
      });
      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        SetSocket(null);
      }
    }
  }, [user]);
  return (
    <Socketcontext.Provider
      value={{ socket: socket, OnlineUsers: OnlineUsers }}
    >
      {children}
    </Socketcontext.Provider>
  );
};

export const Mainsocket = () => {
  return useContext(Socketcontext);
};
