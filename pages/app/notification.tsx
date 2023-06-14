import HomeLayout from "@/components/Layout/HomeLayout";
import React, { ReactElement } from "react";

const Notification = () => {
  return (
    <div>
      <div className="p-5 border-b">
        <h4 className="font-medium mb-2">Apa Kabar ? Tak Lama jumpa !</h4>
        <p className="text-sm text-gray-500">
          Cobain belanja yuk ! disini serba ada dan murah lhooo
        </p>
      </div>
    </div>
  );
};

Notification.getLayout = (page: ReactElement) => {
  return <HomeLayout title="Notifikasi">{page}</HomeLayout>;
};

export default Notification;
