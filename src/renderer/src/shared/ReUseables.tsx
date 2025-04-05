import React from "react";

interface SidebarIconProps {
  children: React.ReactNode;
  className?: string;
}

export const SidebarIcon = React.memo((props: SidebarIconProps) => {
  return <div className={props.className}>{props.children}</div>;
});

export const ChatHead = React.memo(() => {
  return (
    <div className="w-full py-1 px-1.5">
      <div className="flex w-full hover:bg-gray-100 py-1.5 pl-1 pr-2 rounded-sm">
        <div>
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src="https://i.ibb.co/mhJM5g0/cat-ocean-eyes-xh-1920x1080.jpg"
              alt=""
              className="min-h-full min-w-full object-cover"
            />
          </div>
        </div>
        <div className="block ml-2.5 text-[#78716c] w-full text-sm">
          <div className="flex justify-between w-full">
            <div className="font-bold text-black">Kenny Will</div>
            <div className="font-semibold">Yesterday</div>
          </div>
          <div>I am doing great too</div>
        </div>
      </div>
    </div>
  );
});
