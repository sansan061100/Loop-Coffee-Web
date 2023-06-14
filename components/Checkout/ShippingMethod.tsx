import { useMapStore } from "@/store/map-store";
import { useShippingStore } from "@/store/shipping-store";

import {
  ChevronRightIcon,
  MapPinIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { shallow } from "zustand/shallow";

interface Props {
  address: string;
  lat: number;
  long: number;
}
const ShippingMethod: React.FC<Props> = ({ address, lat, long }) => {
  const [shipping, setShipping] = useShippingStore(
    (state) => [state.data, state.setShipping],
    shallow
  );
  const myLocation = useMapStore((state) => state.location);

  const getUrlDirectionMapsStore = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${myLocation.lat},${myLocation.long}&destination=${lat},${long}&travelmode=driving`;
    return url;
  };

  return (
    <div>
      <div className="tabs w-full">
        <a
          className={`tab flex-1 h-auto py-3 ${
            shipping == 1 ? "tab-active" : ""
          }`}
          onClick={() => setShipping(1)}
        >
          Diantarkan Penjual
        </a>
        <a
          className={`tab flex-1 h-auto py-3 ${
            shipping == 2 ? "tab-active" : ""
          }`}
          onClick={() => setShipping(2)}
        >
          Ambil Sendiri
        </a>
      </div>
      {shipping == 1 ? (
        <Link href={"/app/profile/address"}>
          <div className="flex justify-between items-center p-5 border-b">
            <div className="flex space-x-5 items-center">
              <MapPinIcon className="h-6 w-6" />
              <div>
                <p className="text-sm">{myLocation.address}</p>
              </div>
            </div>
            <ChevronRightIcon className="h-6 w-6 text-gray-500" />
          </div>
        </Link>
      ) : (
        <Link target="_blank" href={getUrlDirectionMapsStore()}>
          <div className="flex justify-between items-center p-5 border-b">
            <div className="flex space-x-5 items-center">
              <BuildingStorefrontIcon className="h-6 w-6" />
              <div>
                <p className="text-sm">{address}</p>
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
