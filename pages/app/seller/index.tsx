import DetailLayout from "@/components/Layout/DetailLayout";
import ListProduct from "@/components/Seller/ListProduct";
import Image from "next/image";
import React, { ReactElement } from "react";

const Seller = () => {
  return (
    <div>
      <div className="border-b">
        <div className="h-72 bg-slate-100 w-full relative">
          <Image
            src={
              "https://awsimages.detik.net.id/community/media/visual/2021/06/27/made-coffee_43.jpeg?w=700&q=90"
            }
            alt="Detail Coffee"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-5">
          <div className="flex  items-center justify-between">
            <h3 className="font-bold text-xl">Filament Coffee</h3>
            <p className="text-sm font-semibold text-gray-400">350 Meter</p>
          </div>
          <p className="mt-3 text-gray-500">
            Jl. Sukamulya, Sukamulya, Kec. Bungursari, Kab. Tasikmalaya, Jawa
            Barat 46151
          </p>
        </div>
      </div>
      <ListProduct />
    </div>
  );
};

Seller.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Produk">{page}</DetailLayout>;
};

export default Seller;
