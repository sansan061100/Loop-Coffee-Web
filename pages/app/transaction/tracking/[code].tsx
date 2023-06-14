import DetailLayout from "@/components/Layout/DetailLayout";
import LoadingDetail from "@/components/Transaction/LoadingDetail";
import { useMapStore } from "@/store/map-store";
import { SHIPPING, TRANSACTION } from "@/utils/constant";
import helper from "@/utils/helper";
import http from "@/utils/http";
import {
  BuildingStorefrontIcon,
  ChevronRightIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { useQuery } from "react-query";

const Tracking = () => {
  const { query } = useRouter();
  const { data, isLoading } = useQuery(
    ["detail-order", query.code],
    async () => {
      const req = await http.get(`/order/${query.code}`);
      const address = await axios.get(
        "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
          req.data.result.outlet.location_outlet.lat +
          "&lon=" +
          req.data.result.outlet.location_outlet.lng +
          "&zoom=18&addressdetails=1"
      );
      return {
        ...req.data.result,
        address: address.data.display_name,
      };
    }
  );

  const callWa = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${data.outlet.phone_number}&text=Halo%20${data.outlet.name}%20saya%20ingin%20bertanya`,
      "_blank"
    );
  };

  const myLocation = useMapStore((state) => state.location);
  const openMap = () => {
    if (data.shipping_type == SHIPPING.SEND) {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${data.outlet.location_outlet.lat},${data.outlet.location_outlet.lng}`,
        "_blank"
      );
    } else {
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${data.outlet.location_outlet.lat},${data.outlet.location_outlet.lng}&destination=${myLocation.lat},${myLocation.long}&travelmode=driving`,
        "_blank"
      );
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingDetail />
      ) : (
        <>
          {data.status == TRANSACTION.WAITING && (
            <div className="alert rounded-none flex justify-center">
              {data.shipping_type == SHIPPING.SEND ? (
                <p className="text-sm text-gray-500">
                  Pesanan akan diantar oleh penjual
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  Segera ambil pesananmu di outlet
                </p>
              )}
            </div>
          )}
          <div className="p-5 space-y-4 border-b">
            <div className="flex space-x-5 items-center">
              <BuildingStorefrontIcon className="h-6 w-6 text-primary-500" />
              <p className="font-medium">{data.outlet?.name}</p>
            </div>
            <div
              className="flex space-x-5 items-center justify-between"
              onClick={callWa}
            >
              <div className="flex space-x-5 items-center">
                <PhoneIcon className="h-6 w-6 text-primary-500" />
                <p className="font-medium border-b border-dashed ">
                  {data?.outlet.phone_number}
                </p>
              </div>
              <ChevronRightIcon className="h-5 w-5" />
            </div>
            <div
              className="flex space-x-5 items-center justify-between cursor-pointer"
              onClick={openMap}
            >
              <div className="flex space-x-5 items-center">
                <div className="flex-1">
                  <MapPinIcon className="h-6 w-6 text-primary-500" />
                </div>
                <p className="font-medium line-clamp-1 border-b border-dashed ">
                  {data?.address}
                </p>
              </div>
              <ChevronRightIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="p-5">
            <h4 className="text-lg font-semibold">Order Detail</h4>
            <ul className="mt-5 space-y-5 pb-5 border-b">
              {data.detail_order.map((item: any) => (
                <li key={item.id} className="flex items-center justify-between">
                  <p>
                    {item.product.name} x {item.qty}
                  </p>
                  <p className="text-gray-500">
                    {helper.number(
                      parseInt(item.price) * parseInt(item.qty),
                      "Rp"
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-5">
              <li className="flex items-center justify-between">
                <p>Total Yang Dibayar</p>
                <p className="text-gray-500">
                  {helper.number(data.amount, "Rp")}
                </p>
              </li>
            </ul>
          </div>
          {data.status == TRANSACTION.WAITING && (
            <div className="footer-container">
              <button className="btn btn-primary w-full" onClick={callWa}>
                Hubungi Penjual
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

Tracking.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Pesanan">{page}</DetailLayout>;
};

export default Tracking;
