import React, { PropsWithChildren } from "react";
import Header, { HeaderProps } from "./_Partials/Header";
import BottomNavigation from "./_Partials/BottomNavigation";
import HeaderDetail, { HeaderDetailProps } from "./_Partials/HeaderDetail";
import MainLayout from "./MainLayout";

const DetailLayout: React.FC<PropsWithChildren<HeaderDetailProps>> = ({
  children,
  title,
  navEnd,
}) => {
  return (
    <MainLayout>
      <HeaderDetail title={title} navEnd={navEnd} />
      <div className="overflow-y-auto h-full">{children}</div>
    </MainLayout>
  );
};

export default DetailLayout;
