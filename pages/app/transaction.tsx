import HomeLayout from "@/components/Layout/HomeLayout";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

const Transaction = () => {
  return (
    <div>
      <div className="tabs w-full border-b">
        <a className={`tab flex-1 h-auto py-3 tab-active`}>Berlangsung</a>
        <a className={`tab flex-1 h-auto py-3`}>Riwayat</a>
      </div>
      <div className="p-0 border-b">
        <div className=" p-5 space-x-5 items-center flex">
          <div className="h-11 w-11 flex justify-center items-center rounded-md bg-primary-100">
            <BuildingStorefrontIcon className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-semibold">Filament Coffee</h4>
              <h4 className="font-semibold">Rp 38.000</h4>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <h4 className="text-sm font-medium">3 Menu</h4>
              <p className="text-xs mt-2 text-gray-400">
                14 Agustus 2022 14:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Transaction.getLayout = (page: ReactElement) => {
  return <HomeLayout title="Transaksi">{page}</HomeLayout>;
};

export default Transaction;
