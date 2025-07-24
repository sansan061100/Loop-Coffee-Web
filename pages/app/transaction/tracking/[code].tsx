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
      const result = req.data.result;
      const location = result.outlet.location_outlet;

      let address = "Tidak ada alamat";
      if (location?.lat != null && location?.lng != null) {
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}&zoom=18&addressdetails=1`
          );
          if (response.status === 200) {
            address = response.data.display_name;
          }
        } catch (error) {
          console.error("Failed to fetch address", error);
        }
      }

      return {
        ...result,
        address,
      };
    },
    {
      enabled: !!query.code, // pastikan query.code sudah tersedia
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
            <div className="flex justify-center rounded-none alert">
              {data.shipping_type == SHIPPING.SEND ? (
                <p className="text-gray-500 text-sm">
                  Pesanan akan diantar oleh penjual
                </p>
              ) : (
                <p className="text-gray-500 text-sm">
                  Segera ambil pesananmu di outlet
                </p>
              )}
            </div>
          )}
          <div className="space-y-4 p-5 border-b">
            <div className="flex items-center space-x-5">
              <BuildingStorefrontIcon className="w-6 h-6 text-primary-500" />
              <p className="font-medium">{data.outlet?.name}</p>
            </div>
            <div
              className="flex justify-between items-center space-x-5"
              onClick={callWa}
            >
              <div className="flex items-center space-x-5">
                <PhoneIcon className="w-6 h-6 text-primary-500" />
                <p className="border-b border-dashed font-medium">
                  {data?.outlet.phone_number}
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5" />
            </div>
            <div
              className="flex justify-between items-center space-x-5 cursor-pointer"
              onClick={openMap}
            >
              <div className="flex items-center space-x-5">
                <div className="flex-1">
                  <MapPinIcon className="w-6 h-6 text-primary-500" />
                </div>
                <p className="border-b border-dashed font-medium line-clamp-1">
                  {data?.address}
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-lg">Order Detail</h4>
            <ul className="space-y-5 mt-5 pb-5 border-b">
              {data.detail_order.map((item: any) => (
                <li key={item.id} className="flex justify-between items-center">
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
            <ul className="space-y-5 mt-5">
              <li className="flex justify-between items-center">
                <p>Total Yang Dibayar</p>
                <p className="text-gray-500">
                  {helper.number(data.amount, "Rp")}
                </p>
              </li>
            </ul>
          </div>
          {data.status == TRANSACTION.WAITING && (
            <div className="footer-container">
              <button className="w-full btn btn-primary" onClick={callWa}>
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
