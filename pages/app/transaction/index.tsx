import HomeLayout from "@/components/Layout/HomeLayout";
import Loading from "@/components/Transaction/Loading";
import helper from "@/utils/helper";
import http from "@/utils/http";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";

interface TransactionProps {
  id: number;
  code: string;
  created_at: string;
  amount: number;
  outlet: string;
}
const Transaction = () => {
  const [status, setStatus] = useState(0);

  const { data, isLoading } = useQuery(["transaction", status], async () => {
    const req = await http.get(`order?status=${status}`);
    return req.data.result;
  });

  return (
    <div>
      <div className="tabs w-full border-b">
        <button
          onClick={() => setStatus(0)}
          className={`tab flex-1 h-auto py-3 ${
            status == 0 ? "tab-active " : ""
          }`}
        >
          Berlangsung
        </button>
        <button
          onClick={() => setStatus(1)}
          className={`tab flex-1 h-auto py-3  ${
            status == 1 ? "tab-active " : ""
          }`}
        >
          Riwayat
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        data.map((val: TransactionProps) => (
          <Link key={val.code} href={"/app/transaction/tracking/" + val.code}>
            <div className="p-0 border-b">
              <div className=" p-5 space-x-5 items-center flex">
                <div className="h-11 w-11 flex justify-center items-center rounded-md bg-primary-100">
                  <BuildingStorefrontIcon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">{val.outlet}</h4>
                    <h4 className="font-semibold">
                      {helper.number(val.amount, "Rp")}
                    </h4>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <h4 className="text-sm font-medium">{val.code}</h4>
                    <p className="text-xs mt-2 text-gray-400">
                      {helper.dateTime(val.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
      {data?.length === 0 && (
        <div className="flex py-32 justify-center items-center">
          <p>Tidak ada data</p>
        </div>
      )}
      <div className="h-48 w-full" />
    </div>
  );
};

Transaction.getLayout = (page: ReactElement) => {
  return <HomeLayout title="Transaksi">{page}</HomeLayout>;
};

export default Transaction;
