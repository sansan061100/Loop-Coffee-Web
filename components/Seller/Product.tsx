import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();
  return (
    <div
      className="py-4 border-t last:border-b cursor-pointer px-5 flex hover:bg-gray-100 justify-between items-center"
      onClick={() => router.push("/app/seller/1")}
    >
      <div className="space-y-2">
        <h4 className="font-bold">Hot Americano</h4>
        <p className="text-sm text-gray-500">Espressso + hot water</p>
        <h4 className="font-bold">Rp 38.000</h4>
      </div>
      <div className="relative h-20 w-20">
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
    </div>
  );
};

export default Product;
