import React, { PropsWithChildren } from "react";
import Header from "./_Partials/Header";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="artboard  relative lg:w-2/5 min-h-screen bg-white">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
