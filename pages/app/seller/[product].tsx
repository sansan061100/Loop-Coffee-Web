import DetailLayout from "@/components/Layout/DetailLayout";
import Image from "next/image";
import React, { ReactElement } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Stepper from "@/components/Seller/Stepper";

const DetailProduct = () => {
  return (
    <div>
      <figure>
        <Image
          src="https://asset.kompas.com/crops/_SfcFYf71wzjEp-eNLHB_subNpI=/0x0:1000x667/750x500/data/photo/2020/10/05/5f7a1e1a209d9.jpg"
          alt="Shoes"
          height={320}
          width={300}
          className="w-full"
        />
      </figure>
      <div className=" p-5 space-y-2">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-xl">Hot Americano</h4>
          <h4 className="font-bold text-lg">Rp 38.000</h4>
        </div>
        <p className="text-gray-500">Espressso + hot water</p>
      </div>
      <div className="flex justify-center items-center">
        <Stepper />
      </div>
      <div className="absolute bottom-5 right-5 left-5">
        <button className="btn btn-primary w-full">
          <ShoppingCartIcon className="h-5 w-5 mr-5" />
          Tambah Keranjang
        </button>
      </div>
    </div>
  );
};

DetailProduct.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Detail">{page}</DetailLayout>;
};
export default DetailProduct;
