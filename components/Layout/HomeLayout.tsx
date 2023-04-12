import React, { PropsWithChildren } from "react";
import Header, { HeaderProps } from "./_Partials/Header";
import BottomNavigation from "./_Partials/BottomNavigation";

const HomeLayout: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title,
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="artboard  relative lg:w-2/5 min-h-screen bg-white">
        <Header title={title} />
        {children}
        <div className="z-50">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
