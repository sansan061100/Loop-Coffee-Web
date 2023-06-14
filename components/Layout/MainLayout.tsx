import React, { PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="artboard  relative lg:w-4/12  bg-white h-screen">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
