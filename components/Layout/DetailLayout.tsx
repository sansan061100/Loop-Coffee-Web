import React, { PropsWithChildren } from "react";
import Header, { HeaderProps } from "./_Partials/Header";
import BottomNavigation from "./_Partials/BottomNavigation";
import HeaderDetail from "./_Partials/HeaderDetail";

const DetailLayout: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title,
}) => {
  return (
    <div className="flex justify-center  h-screen ">
      <div className="artboard  relative lg:w-2/5  bg-white">
        <HeaderDetail title={title} />
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
};

export default DetailLayout;
