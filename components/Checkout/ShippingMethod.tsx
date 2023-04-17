import {
  ChevronRightIcon,
  MapPinIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

const ShippingMethod = () => {
  const [method, setMethod] = useState(0);
  return (
    <div>
      <div className="tabs w-full">
        <a
          className={`tab flex-1 h-auto py-3 ${
            method == 0 ? "tab-active" : ""
          }`}
          onClick={() => setMethod(0)}
        >
          Diantarkan Penjual
        </a>
        <a
          className={`tab flex-1 h-auto py-3 ${
            method == 1 ? "tab-active" : ""
          }`}
          onClick={() => setMethod(1)}
        >
          Ambil Sendiri
        </a>
      </div>
      {method == 0 ? (
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
      ) : (
        <Link href={"/app/profile/address"}>
          <div className="flex justify-between items-center p-5 border-b">
            <div className="flex space-x-5 items-center">
              <BuildingStorefrontIcon className="h-6 w-6" />
              <div>
                <p className="text-sm">
                  Panyingkiran, Tasikmalaya, West Java, 46151, Indonesia
                </p>
              </div>
            </div>
            <ChevronRightIcon className="h-6 w-6 text-gray-500" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default ShippingMethod;
