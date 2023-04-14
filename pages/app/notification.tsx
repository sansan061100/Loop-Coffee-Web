import HomeLayout from "@/components/Layout/HomeLayout";
import React, { ReactElement } from "react";

const Notification = () => {
  return <div>Notification</div>;
};

Notification.getLayout = (page: ReactElement) => {
  return <HomeLayout title="Notifikasi">{page}</HomeLayout>;
};

export default Notification;
