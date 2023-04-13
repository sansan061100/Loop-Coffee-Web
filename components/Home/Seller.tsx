import Image from "next/image";
import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const Seller = () => {
  const router = useRouter();
  return (
    <div
      className="border-b hover:bg-gray-200 cursor-pointer"
      onClick={() => router.push("/app/seller")}
    >
      <div className="card bg-base-100 h-32 rounded-none image-full">
        <figure>
          <Image
            src="https://awsimages.detik.net.id/community/media/visual/2021/06/27/made-coffee_43.jpeg?w=700&q=90"
            alt="Shoes"
            height={420}
            width={500}
            className="w-full"
          />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title z-0">Filament Coffee</h2>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-medium line-clamp-1">
          Jl. HZ. Mustofa No.326, Tugujaya, Kec. Cihideung,
        </h4>
        <div className="flex items-center space-x-3 mt-3">
          <MapPinIcon className="h-4 w-4" />
          <p className="text-sm text-gray-500">Jarak 350 Meter</p>
        </div>
      </div>
    </div>
  );
};

export default Seller;
