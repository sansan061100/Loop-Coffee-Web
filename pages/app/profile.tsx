import HomeLayout from "@/components/Layout/HomeLayout";
import ListNavigation from "@/components/ListNavigation";
import {
  ArrowRightOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { ReactElement } from "react";

const profile = () => {
  return (
    <div>
      <div className="p-5 border-t border-b flex space-x-5 items-center">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <Image
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              height={150}
              width={150}
              alt="Avatar"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold tracking-wide">Della Rianty Febrian</h4>
          <p className="text-sm text-gray-500 mt-1">Edit Profile</p>
        </div>
      </div>
      <div>
        <ListNavigation
          title="Alamat Saya"
          icon={<MapPinIcon className="h-5 w-5" />}
        />
        <ListNavigation
          title="Bantuan"
          icon={<ChatBubbleLeftEllipsisIcon className="h-5 w-5" />}
        />
        <ListNavigation
          title="Log Out"
          icon={<ArrowRightOnRectangleIcon className="h-5 w-5" />}
        />
      </div>
    </div>
  );
};

profile.getLayout = (page: ReactElement) => {
  return <HomeLayout title="Profile">{page}</HomeLayout>;
};

export default profile;
