import CartMenu from "@/components/Cart/CartMenu";
import DetailLayout from "@/components/Layout/DetailLayout";
import ListProduct from "@/components/Seller/ListProduct";
import LoadingDetail from "@/components/Seller/LoadingDetail";
import http from "@/utils/http";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, ReactElement } from "react";
import { useQuery } from "react-query";

const Seller = () => {
  const { query } = useRouter();
  const { isLoading, data } = useQuery(["seller", query.seller], async () => {
    const req = await http.get(`outlet/${query.seller}`);
    return req.data?.result;
  });

  return (
    <div>
      {isLoading ? (
        <LoadingDetail />
      ) : (
        <Fragment>
          <div className="border-b">
            <div className="h-72 bg-primary-300 w-full relative">
              {data?.outlet.banner && (
                <Image
                  src={data?.outlet.banner}
                  alt={data?.outlet.name}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <div className="p-5">
              <div className="flex  items-center justify-between">
                <h3 className="font-bold text-xl">{data?.outlet.name}</h3>
              </div>
              <p className="mt-3 text-gray-500">{data?.outlet.address}</p>
            </div>
          </div>
          <div className="pb-40">
            <ListProduct data={data?.kategori} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

Seller.getLayout = (page: ReactElement) => {
  return (
    <DetailLayout title="Produk" navEnd={<CartMenu />}>
      {page}
    </DetailLayout>
  );
};

export default Seller;
