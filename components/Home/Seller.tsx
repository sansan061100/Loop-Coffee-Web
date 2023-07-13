import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { AVATAR } from "@/utils/constant";

export interface SellerProps {
  id: number;
  lat: string;
  lng: string;
  name: string;
  banner?: any;
  distance: string;
  address: string;
  avatar?: string;
}

const Seller: React.FC<SellerProps> = ({
  name,
  distance,
  address,
  avatar,
  id,
}) => {
  const router = useRouter();

  return (
    <div
      className="border-b flex space-x-5 px-3  items-center hover:bg-gray-200 cursor-pointer"
      onClick={() => router.push("/app/seller/" + id)}
    >
      <div className="avatar">
        <div className="w-20 rounded">
          <Image
            height={100}
            width={100}
            src={avatar ?? AVATAR}
            alt="banner"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
      <div className="py-3 ">
        <h2 className="font-semibold z-0">{name}</h2>
        <p className="text-sm mt-2 line-clamp-1 text-gray-400">{address}</p>
        <div className="flex items-center mt-2">
          <p className="text-xs text-gray-400">
            Jarak <span className="capitalize">{distance}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seller;
