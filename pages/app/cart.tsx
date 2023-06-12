const ListCart = dynamic(() => import("@/components/Cart/ListCart"), {
  ssr: false,
});
import DetailLayout from "@/components/Layout/DetailLayout";
import { useCartStore } from "@/store/cart-store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import NoSSR from "@mpth/react-no-ssr";
import { shallow } from "zustand/shallow";
import helper from "@/utils/helper";

const Cart = () => {
  const router = useRouter();
  const [store, cart, destroyStore] = useCartStore(
    (state) => [state.store, state.data, state.destoryStore],
    shallow
  );

  useEffect(() => {
    if (cart.length === 0) {
      destroyStore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.length]);

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      if (item.qty) {
        total += item.qty * item.sell_price;
      }
    });
    return total;
  };

  const getTotalQty = () => {
    let total = 0;
    cart.forEach((item) => {
      if (item.qty) {
        total += item.qty;
      }
    });
    return total;
  };

  return (
    <NoSSR>
      {cart.length > 0 ? (
        <>
          <div className="border-b ">
            <div className="p-5">
              <div className="flex  items-center justify-between">
                <h3 className="font-bold text-lg">{store.name}</h3>
                <p className="text-sm font-semibold text-gray-400">350 Meter</p>
              </div>
              <p className="mt-2 line-clamp-1 text-gray-400 text-sm">
                {store.address}
              </p>
            </div>
          </div>
          <ListCart />
          <div className="flex bg-white drop-shadow-md  justify-between items-center footer-container bottom-0 p-5 border-t right-0 left-0">
            <div>
              <label>Total Harga</label>
              <h4 className="font-bold text-lg">
                {getTotalPrice() === 0
                  ? "-"
                  : helper.number(getTotalPrice(), "Rp")}
              </h4>
            </div>
            <button
              className="btn btn-primary"
              disabled={cart.length === 0}
              onClick={() => router.push("/app/checkout")}
            >
              Checkout ({getTotalQty()})
            </button>
          </div>
        </>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col">
          <h4 className="text-xl mb-2 font-semibold">Keranjang Anda Kosong</h4>
          <p className="text-gray-400">
            Silahkan tambahkan produk ke keranjang
          </p>
        </div>
      )}
    </NoSSR>
  );
};

Cart.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Keranjang">{page}</DetailLayout>;
};

export default Cart;
