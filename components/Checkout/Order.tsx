import Image from "next/image";
import React from "react";

const Order = () => {
  return (
    <div className="flex py-1 items-center space-x-5">
      <div className="relative h-14 w-14">
        <Image
          src={
            "https://asset.kompas.com/crops/_SfcFYf71wzjEp-eNLHB_subNpI=/0x0:1000x667/750x500/data/photo/2020/10/05/5f7a1e1a209d9.jpg"
          }
          alt="Detail Coffee"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between ">
          <h6 className="font-medium mb-2">Americano Hot</h6>
          <h6 className="font-medium mb-2">Rp 38.000</h6>
        </div>
        <p className="text-sm text-gray-500">Qty : 1</p>
      </div>
    </div>
  );
};

export default Order;
