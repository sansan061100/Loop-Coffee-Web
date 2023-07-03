import React, { PropsWithChildren } from "react";
import Header, { HeaderProps } from "./_Partials/Header";
import BottomNavigation from "./_Partials/BottomNavigation";
import MainLayout from "./MainLayout";
const Sidebar = dynamic(() => import("../Sidebar"), {
  ssr: false,
});
import Head from "next/head";
import dynamic from "next/dynamic";
const MapHeader = dynamic(() => import("../MapHeader"), {
  ssr: false,
});
const HomeLayout: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  return (
    <MainLayout>
      <Head>
        <title>{`Home Page - Loop Coffee`}</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header>
            <MapHeader />
          </Header>
          <div className="overflow-y-auto h-full">
            {children}
            <div className="z-50">
              <BottomNavigation />
            </div>
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
