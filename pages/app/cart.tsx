import ListCart from "@/components/Cart/ListCart";
import DetailLayout from "@/components/Layout/DetailLayout";
import React, { ReactElement } from "react";

const Cart = () => {
  return (
    <div>
      <div className="border-b ">
        <div className="p-5">
          <div className="flex  items-center justify-between">
            <h3 className="font-bold text-lg">Filament Coffee</h3>
            <p className="text-sm font-semibold text-gray-400">350 Meter</p>
          </div>
          <p className="mt-2 line-clamp-1 text-gray-400 text-sm">
            Jl. Sukamulya, Sukamulya, Kec. Bungursari, Kab. Tasikmalaya, Jawa
            Barat 46151
          </p>
        </div>
      </div>
      <ListCart />
      <div className="flex  justify-between items-center footer-container bottom-0 p-5 border-t right-0 left-0">
        <div>
          <label>Total Harga</label>
          <h4 className="font-bold text-lg">-</h4>
        </div>
        <button className="btn btn-primary">Checkout (1)</button>
      </div>
    </div>
  );
};

Cart.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Keranjang">{page}</DetailLayout>;
};

export default Cart;
