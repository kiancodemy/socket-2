import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
export const app = express();
export const server = createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  },
});
export const getReciever = (reciverid) => {
  return OnlineUser[reciverid];
};
const OnlineUser = {};

io.on("connection", (socket) => {
  console.log("a user is  connected", socket.id);
  const getid = socket.handshake.query.userid;
  if (getid) {
    OnlineUser[getid] = socket.id;
    console.log(OnlineUser);

    io.emit("allOnlineUsers", Object.keys(OnlineUser));
  }
  socket.on("disconnect", () => {
    console.log("user disconnected0" + socket.id);
    delete OnlineUser[getid];
    io.emit("allOnlineUsers", Object.keys(OnlineUser));
  });
});
