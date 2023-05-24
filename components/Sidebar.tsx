import React from "react";
import Image from "next/image";
import {
  ArrowRightOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ListNavigation from "./ListNavigation";
import { useAuthStore } from "@/store/auth-store";

const Sidebar = () => {
  const user = useAuthStore((state) => state.user);

  const handleLogout = () => {
    const confirm = window.confirm("Apakah anda yakin ingin keluar?");
    if (confirm) {
    }
  };

  return (
    <div className="h-full relative">
      <div className="p-5 border-b flex space-x-5 items-center">
        <div className="avatar">
          <div className="w-14 mask mask-squircle">
            <Image src={user.avatar} height={150} width={150} alt="Avatar" />
          </div>
        </div>
        <div>
          <h4 className="font-bold tracking-wide line-clamp-1">{user.name}</h4>
          <p className="text-sm text-gray-500 mt-1 line-clamp-1">
            example@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-5">
        <ListNavigation
          title="Profile"
          icon={<UserIcon className="h-5 w-5" />}
          href="/app/profile"
        />
        <ListNavigation
          title="Alamat Saya"
          icon={<MapPinIcon className="h-5 w-5" />}
          href="/app/profile/address"
        />
        <ListNavigation
          title="Bantuan"
          icon={<ChatBubbleLeftEllipsisIcon className="h-5 w-5" />}
        />
        <ListNavigation
          title="Log Out"
          onClick={handleLogout}
          icon={<ArrowRightOnRectangleIcon className="h-5 w-5" />}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="text-center text-sm text-gray-400 ">Version 1.0.0</div>
      </div>
    </div>
  );
};

export default Sidebar;
