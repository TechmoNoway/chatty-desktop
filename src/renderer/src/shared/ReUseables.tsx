import React from "react";

interface SidebarIconProps {
  children: React.ReactNode;
  className?: string;
}

export const SidebarIcon = React.memo((props: SidebarIconProps) => {
  return <div className={props.className}>{props.children}</div>;
});
