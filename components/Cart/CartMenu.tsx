import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useCartStore } from "@/store/cart-store";

const CartMenu = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.data);

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
    <button
      className="btn btn-ghost btn-circle relative"
      onClick={() => router.push("/app/cart")}
    >
      {getTotalQty() > 0 && (
        <div className="h-4 w-4 bg-primary flex bg-red-500 bouce-animation justify-center items-center rounded-full absolute right-0 top-1">
          <label className="text-xs text-white ">{getTotalQty()}</label>
        </div>
      )}
      <ShoppingCartIcon className="h-6 w-6" />
    </button>
  );
};

export default CartMenu;
