import Order from "@/components/Checkout/Order";
import ShippingMethod from "@/components/Checkout/ShippingMethod";
import DetailLayout from "@/components/Layout/DetailLayout";
import { useCartStore } from "@/store/cart-store";
import React, { ReactElement } from "react";

const Checkout = () => {
  const cart = useCartStore((state) => state.data);
  return (
    <div className="w-full">
      <ShippingMethod />
      <div className="p-5">
        <h3 className="text-lg font-semibold">Detail Pesanan</h3>
        <div className="pt-5 space-y-5">
          {cart.map((item) => (
            <Order key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="footer-container">
        <button className="btn btn-primary w-full">Lanjutkan Pembayaran</button>
      </div>
    </div>
  );
};

Checkout.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Checkout">{page}</DetailLayout>;
};

export default Checkout;
