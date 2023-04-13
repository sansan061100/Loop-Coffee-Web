import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const CartMenu = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-ghost btn-circle relative"
      onClick={() => router.push("cart")}
    >
      {/* <div className="h-4 w-4 bg-primary flex justify-center items-center rounded-full absolute right-0 top-1">
        <label className="text-xs text-white ">1</label>
      </div> */}
      <ShoppingCartIcon className="h-6 w-6" />
    </button>
  );
};

export default CartMenu;
