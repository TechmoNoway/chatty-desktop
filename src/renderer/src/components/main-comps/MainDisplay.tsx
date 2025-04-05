import React, { useCallback, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MainDisplay = React.memo((props: any) => {
  const navigate = useNavigate();
  const handleRouting = useCallback(() => {
    navigate("/chat");
  }, []);
  useEffect(() => {
    handleRouting();
  }, []);

  return (
    <div className="w-11/12">
      <Outlet />
    </div>
  );
});

export default MainDisplay;
