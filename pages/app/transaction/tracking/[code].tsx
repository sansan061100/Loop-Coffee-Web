import DetailLayout from "@/components/Layout/DetailLayout";
import {
  BuildingStorefrontIcon,
  ChevronRightIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

const Tracking = () => {
  return (
    <div>
      <div className="p-5 space-y-4 border-b">
        <div className="flex space-x-5 items-center">
          <BuildingStorefrontIcon className="h-6 w-6 text-primary-500" />
          <p className="font-medium">Filament Coffee</p>
        </div>
        <div className="flex space-x-5 items-center justify-between">
          <div className="flex space-x-5 items-center">
            <PhoneIcon className="h-6 w-6 text-primary-500" />
            <p className="font-medium">089662471104</p>
          </div>
          <ChevronRightIcon className="h-5 w-5" />
        </div>
        <div className="flex space-x-5 items-center justify-between">
          <div className="flex space-x-5 items-center">
            <MapPinIcon className="h-6 w-6 text-primary-500" />
            <p className="font-medium line-clamp-1">
              Parakannyasag, Tasikmalaya, Jawa Barat, 46151, Indonesia
            </p>
          </div>
          <ChevronRightIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold">Order Detail</h4>
        <ul className="mt-5 list-decimal ml-5">
          <li>Kopi ABC</li>
        </ul>
      </div>
    </div>
  );
};

Tracking.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Pesanan">{page}</DetailLayout>;
};

export default Tracking;
