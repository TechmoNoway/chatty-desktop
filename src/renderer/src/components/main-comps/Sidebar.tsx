import { SidebarIcon } from "@renderer/shared/ReUseables";
import React from "react";
import ChatIcon from "../../assets/icons-svg/chat-128.svg";
import CallIcon from "../../assets/icons-svg/call-27.svg";
import StatusIcon from "../../assets/icons-svg/Status.svg";
import ArchiveIcon from "../../assets/icons-svg/archivebox-2.svg";
import StarIcon from "../../assets/icons-svg/star-86.svg";
import SettingIcon from "../../assets/icons-svg/gear-66.svg";

const Sidebar = React.memo((props: any) => {
  return (
    <div className="flex flex-col items-center justify-between w-1/12 py-3 bg-gray-100 border-r-[1px] border-[#dadada] h-full">
      <div className="space-y-2">
        <SidebarIcon className="rounded-lg p-1.5 hover:bg-gray-200 h-12 w-12 flex items-center justify-center">
          <img src={ChatIcon} className="w-8 h-8" alt="Chat" />
        </SidebarIcon>
        <SidebarIcon className="rounded-lg p-1.5 hover:bg-gray-200 h-12 w-12 flex items-center justify-center">
          <img src={CallIcon} className="w-6 h-6" alt="Chat" />
        </SidebarIcon>
        <SidebarIcon className="rounded-lg p-1.5 hover:bg-gray-200 h-12 w-12 flex items-center justify-center">
          <img src={StatusIcon} className="w-6 h-6" alt="Chat" />
        </SidebarIcon>
        <hr className="border-[1px] border-gray-300 w-12 my-4" />
        <SidebarIcon className="rounded-lg p-1.5 hover:bg-gray-200 h-12 w-12 flex items-center justify-center">
          <img src={ArchiveIcon} className="w-6 h-6" alt="Chat" />
        </SidebarIcon>
        <SidebarIcon className="rounded-lg p-1.5 hover:bg-gray-200 h-12 w-12 flex items-center justify-center">
          <img src={StarIcon} className="w-6 h-6" alt="Chat" />
        </SidebarIcon>
      </div>
      <div>
        <SidebarIcon className="rounded-lg p-1.5 hover:bg-gray-200 h-12 w-12 flex items-center justify-center">
          <img src={SettingIcon} className="w-6 h-6" alt="Chat" />
        </SidebarIcon>
      </div>
    </div>
  );
});

export default Sidebar;
