import React, { PropsWithChildren } from "react";
import Header, { HeaderProps } from "./_Partials/Header";
import BottomNavigation from "./_Partials/BottomNavigation";
import MainLayout from "./MainLayout";

const HomeLayout: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title,
}) => {
  return (
    <MainLayout>
      <Header title={title} />
      <div className="overflow-y-auto h-full">{children}</div>
      <div className="z-50">
        <BottomNavigation />
      </div>
    </MainLayout>
  );
};

export default HomeLayout;
