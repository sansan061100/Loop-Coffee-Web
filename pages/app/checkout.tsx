import Order from "@/components/Checkout/Order";
import ShippingMethod from "@/components/Checkout/ShippingMethod";
import DetailLayout from "@/components/Layout/DetailLayout";
import { useCartStore } from "@/store/cart-store";
import React, { ReactElement, useEffect } from "react";
import NoSSR from "@mpth/react-no-ssr";
import haversine from "haversine";
import { useMutation, useQuery } from "react-query";
import http from "@/utils/http";
import { useRouter } from "next/router";
import { useMapStore } from "@/store/map-store";
import { RADIUS } from "@/utils/constant";
import { useShippingStore } from "@/store/shipping-store";
import toast from "react-simple-toasts";
import { shallow } from "zustand/shallow";

const Checkout = () => {
  const store = useCartStore((state) => state.store);
  const [cart, destroyCart, destoryStore] = useCartStore(
    (state) => [state.data, state.destroyCart, state.destoryStore],
    shallow
  );

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
  const shipping = useShippingStore((state) => state.data);
  const handleCheckout = async () => {
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
    await mutation.mutateAsync();
  };

  const mutation = useMutation(
    async () => {
      const req = await http.post("/order", {
        address: myLocation.address,
        lat: myLocation.lat,
        lng: myLocation.long,
        shipping_type: shipping,
        outlet: store.id,
        cart: cart.map((item) => {
          return {
            product: item.id,
            qty: item.qty,
          };
        }),
      });
      return req.data;
    },
    {
      onSuccess: (data) => {
        router.replace("/app/transaction/tracking/" + data.result.code);
        setTimeout(() => {
          destoryStore();
          destroyCart();
        }, 1000);
      },
      onError: (error) => {
        toast("Ops, terjadi kesalahan");
        console.log(error);
      },
    }
  );

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
            className={`btn btn-primary w-full ${
              isLoading || mutation.isLoading ? "loading" : ""
            }`}
            disabled={isLoading || mutation.isLoading}
            onClick={handleCheckout}
          >
            {isLoading || mutation.isLoading ? "Loading ..." : "Pesan Sekarang"}
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
