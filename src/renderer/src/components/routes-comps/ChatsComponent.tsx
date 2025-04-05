import React from "react";
import ChatHeadList from "../chat-comps/ChatHeadList";
import MainChatDisplay from "../chat-comps/MainChatDisplay";

const ChatsComponent = React.memo((props: any) => {
  return (
    <div className="flex w-2/5 h-full border-r-2 border-[#dadada] ">
      <ChatHeadList />
      <MainChatDisplay />
    </div>
  );
});

export default ChatsComponent;
