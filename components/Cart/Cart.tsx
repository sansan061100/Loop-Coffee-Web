import { Cart, useCartStore } from "@/store/cart-store";
import helper from "@/utils/helper";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { shallow } from "zustand/shallow";

const Cart: React.FC<Cart> = (props) => {
  const { image, name, qty, sell_price, id } = props;
  const [destroyCart, setCart, updateCart] = useCartStore(
    (state) => [state.destroyCart, state.setCart, state.updateCart],
    shallow
  );

  const handleAddCart = () => {
    const newQty = (qty ?? 0) + 1;
    setCart({ ...props, qty: newQty }, true);
  };

  const handleMinusCart = () => {
    if (qty === 1) return destroyCart(id);
    const newQty = (qty ?? 0) - 1;
    updateCart(id, newQty);
  };

  return (
    <div className="px-5 py-5 flex space-x-5 last:border-b">
      <div className="relative h-20 w-28">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="space-y-5 w-full">
        <div className="flex justify-between flex-1 w-full ">
          <div className="font-semibold">{name}</div>
          <div className="font-semibold">{helper.number(sell_price, "Rp")}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-5 justify-between rounded-lg py-1  border">
            <button
              className="btn btn-xs btn-square btn-ghost"
              onClick={handleMinusCart}
            >
              <MinusIcon className="h-5 w-5 text-primary" />
            </button>
            <h1>{qty}</h1>
            <button
              className="btn btn-xs btn-square btn-ghost"
              onClick={handleAddCart}
            >
              <PlusIcon className="h-5 w-5 text-primary" />
            </button>
          </div>
          <button
            className="btn btn-sm btn-ghost btn-circle"
            onClick={() => destroyCart(id)}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
