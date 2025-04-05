import React from "react";
import Sidebar from "./main-comps/Sidebar";
import MainDisplay from "./main-comps/MainDisplay";

const WrapperComponent = React.memo((props: any) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <MainDisplay />
    </div>
  );
});

export default WrapperComponent;
