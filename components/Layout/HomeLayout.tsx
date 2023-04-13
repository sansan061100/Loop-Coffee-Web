import React, { PropsWithChildren } from "react";
import Header, { HeaderProps } from "./_Partials/Header";
import BottomNavigation from "./_Partials/BottomNavigation";

const HomeLayout: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title,
}) => {
  return (
    <div className="flex justify-center  h-screen ">
      <div className="artboard  relative lg:w-2/5  bg-white">
        <Header title={title} />
        <div className="overflow-y-auto h-full">{children}</div>
        <div className="z-50">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
