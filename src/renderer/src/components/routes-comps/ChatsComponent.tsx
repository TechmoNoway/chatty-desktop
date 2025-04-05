import React from "react";
import ChatHeadList from "../chat-comps/ChatHeadList";
import MainChatDisplay from "../chat-comps/MainChatDisplay";

const ChatsComponent = React.memo(() => {
  return (
    <div className="flex w-2/5 h-screen border-r-2 border-[#dadada] overflow-y-auto">
      <ChatHeadList />
      <MainChatDisplay />
    </div>
  );
});

export default ChatsComponent;
