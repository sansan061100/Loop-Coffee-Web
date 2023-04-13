import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="px-5 py-5 flex space-x-5 last:border-b">
      <div className="relative h-20 w-28">
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
      <div className="space-y-5 w-full">
        <div className="flex justify-between flex-1 w-full ">
          <div className="font-semibold">Hot Americano</div>
          <div className="font-semibold">Rp 38.000</div>
        </div>
        <div className="flex">
          <div className="flex space-x-5 justify-between rounded-lg py-1  border">
            <button className="btn btn-xs btn-square btn-ghost">
              <MinusIcon className="h-5 w-5 text-primary" />
            </button>
            <h1>1</h1>
            <button className="btn btn-xs btn-square btn-ghost">
              <PlusIcon className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
