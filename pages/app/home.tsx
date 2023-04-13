import Seller from "@/components/Home/Seller";
import HomeLayout from "@/components/Layout/HomeLayout";
import MainLayout from "@/components/Layout/MainLayout";
import React, { ReactElement } from "react";

const Home = () => {
  return (
    <div>
      <Seller />
      <Seller />

      <div className="h-5 w-full pb-48" />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <HomeLayout title="Penjual Sekitar">{page}</HomeLayout>;
};

export default Home;
