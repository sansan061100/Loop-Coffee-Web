import Order from "@/components/Checkout/Order";
import ShippingMethod from "@/components/Checkout/ShippingMethod";
import DetailLayout from "@/components/Layout/DetailLayout";
import { useCartStore } from "@/store/cart-store";
import React, { ReactElement, useEffect } from "react";
import NoSSR from "@mpth/react-no-ssr";
import haversine from "haversine";
import { useQuery } from "react-query";
import http from "@/utils/http";
import { useRouter } from "next/router";
import { useMapStore } from "@/store/map-store";
import { RADIUS } from "@/utils/constant";

const Checkout = () => {
  const store = useCartStore((state) => state.store);
  const cart = useCartStore((state) => state.data);

  const { data, isLoading } = useQuery(["store", store.id], async () => {
    const req = await http.get(`/outlet/${store.id}`);
    return req.data.result.outlet;
  });

  const router = useRouter();
  useEffect(() => {
    if (cart.length === 0) {
      router.back();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.length]);

  const myLocation = useMapStore((state) => state.location);
  const handleCheckout = () => {
    const start = {
      latitude: myLocation.lat,
      longitude: myLocation.long,
    };

    const end = {
      latitude: data?.location_outlet.lat,
      longitude: data?.location_outlet.lng,
    };

    const distance = haversine(start, end, { unit: "meter" });
    if (Math.round(distance) > RADIUS * 1000) {
      return alert("Jarak anda melebihi batas maksimal");
    }
  };

  return (
    <NoSSR>
      <div className="w-full">
        {isLoading ? (
          <div className="animate-pulse space-y-5 p-5">
            <div className="h-4 w-1/3 bg-gray-100 rounded-sm"></div>
            <div className="h-4 w-2/2 bg-gray-100 rounded-sm"></div>
          </div>
        ) : (
          <ShippingMethod
            address={data?.address}
            lat={data?.location_outlet.lat}
            long={data?.location_outlet.lng}
          />
        )}

        <div className="p-5">
          <h3 className="text-lg font-semibold">Detail Pesanan</h3>
          <div className="pt-5 space-y-5">
            {cart.map((item) => (
              <Order key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="footer-container">
          <button
            className={`btn btn-primary w-full ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
            onClick={handleCheckout}
          >
            {isLoading ? "Loading ..." : "Lanjutkan Pembayaran"}
          </button>
        </div>
      </div>
    </NoSSR>
  );
};

Checkout.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Checkout">{page}</DetailLayout>;
};

export default Checkout;
