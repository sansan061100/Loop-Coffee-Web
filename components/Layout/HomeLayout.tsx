import React, { PropsWithChildren } from "react";
import Header, { HeaderProps } from "./_Partials/Header";
import BottomNavigation from "./_Partials/BottomNavigation";
import MainLayout from "./MainLayout";
import Sidebar from "../Sidebar";

const HomeLayout: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title,
}) => {
  return (
    <MainLayout>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header title={title} />
          <div className="overflow-y-auto h-full">{children}</div>
          <div className="z-50">
            <BottomNavigation />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="menu py-4 w-80 bg-base-100">
            <Sidebar />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeLayout;
