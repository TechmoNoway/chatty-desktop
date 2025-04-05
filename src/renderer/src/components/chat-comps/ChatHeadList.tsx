import React from "react";
import ChatHeadListHeader from "./ChatHeadListHeader";
import SearchBox from "./SearchBox";
import { ChatHead } from "@renderer/shared/ReUseables";
import PadlockIcon from "../../assets/icons-svg/padlock.svg";

const ChatHeadList = React.memo(() => {
  return (
    <div className="w-full h-full">
      <ChatHeadListHeader />
      <SearchBox />
      <div>
        <ChatHead />
        <ChatHead />
        <ChatHead />
        <ChatHead />
        <ChatHead />
        <ChatHead />
      </div>

      <div className="w-full text-sm mt-4 flex items-center justify-center text-[#a8a29e] pb-10">
        <img src={PadlockIcon} alt="" className="w-4 h-4" />
        Your personal message are{" "}
        <span className="text-blue-500 ml-1 font-semibold">
          end-to-end encrypted
        </span>
      </div>
    </div>
  );
});

export default ChatHeadList;
