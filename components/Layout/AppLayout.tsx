import React, { PropsWithChildren } from "react";
import MainLayout from "./MainLayout";
import Header from "./_Partials/Header";

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainLayout>
      <Header />
      {children}
    </MainLayout>
  );
};

export default AppLayout;
