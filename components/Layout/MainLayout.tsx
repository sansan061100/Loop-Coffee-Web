import React, { PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="artboard  lg:w-2/5 min-h-screen bg-white">{children}</div>
    </div>
  );
};

export default MainLayout;
