import React from "react";
import Sidebar from "../../components/siderbar/Sidebar";
import MessageContainer from "../../components/messagecomtainer/MessageContainer";
export default function Home() {
  return (
    <div className="flex px-2 gap-x-2 h-screen justify-center py-20">
      <Sidebar></Sidebar>
      <MessageContainer></MessageContainer>
    </div>
  );
}
