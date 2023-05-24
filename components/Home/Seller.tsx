import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export interface SellerProps {
  id: number;
  lat: string;
  lng: string;
  name: string;
  banner?: any;
  distance: string;
  address: string;
}

const Seller: React.FC<SellerProps> = ({ banner, name, distance, address }) => {
  const router = useRouter();

  return (
    <div
      className="border-b hover:bg-gray-200 cursor-pointer"
      onClick={() => router.push("/app/seller")}
    >
      <div className="card bg-base-100 h-32 rounded-none image-full">
        <figure>
          {banner && (
            <Image
              src={banner}
              alt={name}
              height={420}
              width={500}
              className="w-full"
            />
          )}
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title z-0">{name}</h2>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-medium line-clamp-1">{address}</h4>
        <div className="flex items-center space-x-3 mt-3">
          <MapPinIcon className="h-4 w-4" />
          <p className="text-sm text-gray-500">
            Jarak <span className="capitalize">{distance}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seller;
