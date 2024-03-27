import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import RightBar from "./rightbar";

const MainLayout = () => {
  return (
    <div className="w-[1283px] mx-auto flex">
      <SideBar />

      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
};

export default MainLayout;
