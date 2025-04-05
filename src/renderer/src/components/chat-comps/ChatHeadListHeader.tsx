import React from "react";
import EditIcon from "../../assets/icons-svg/square-pencil.svg";
import FilterIcon from "../../assets/icons-svg/filter-circle-outline.svg";

const ChatHeadListHeader = React.memo(() => {
  return (
    <div className="h-12 flex items-center justify-between px-4 py-0.5 select-none [-webkit-app-region:drag] sticky top-0">
      <div className="text-xl font-semibold">Chats</div>
      <div className="flex space-x-4">
        <div>
          <img src={EditIcon} alt="" className="w-5 h-5" />
        </div>
        <div>
          <img src={FilterIcon} alt="" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
});

export default ChatHeadListHeader;
