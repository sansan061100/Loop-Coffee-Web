import React, { PropsWithChildren } from "react";
import Header, { HeaderProps } from "./_Partials/Header";
import BottomNavigation from "./_Partials/BottomNavigation";
import HeaderDetail from "./_Partials/HeaderDetail";
import MainLayout from "./MainLayout";

const DetailLayout: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title,
}) => {
  return (
    <MainLayout>
      <HeaderDetail title={title} />
      <div className="overflow-y-auto h-full">{children}</div>
    </MainLayout>
  );
};

export default DetailLayout;
