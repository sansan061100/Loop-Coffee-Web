import {
  ChevronRightIcon,
  MapPinIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const ShippingMethod = () => {
  return (
    <div>
      <div className="tabs w-full">
        <a className="tab flex-1 h-auto py-3 tab-active">Diantarkan Penjual</a>
        <a className="tab flex-1 h-auto py-3  ">Ambil Sendiri</a>
      </div>
      <Link href={"/app/profile/address"}>
        <div className="flex justify-between items-center p-5 border-b">
          <div className="flex space-x-5 items-center">
            <MapPinIcon className="h-6 w-6" />
            <div>
              <p className="text-sm">
                Panyingkiran, Tasikmalaya, West Java, 46151, Indonesia
              </p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 text-gray-500" />
        </div>
      </Link>
    </div>
  );
};

export default ShippingMethod;
