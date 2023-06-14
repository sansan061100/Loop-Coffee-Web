import { Cart } from "@/store/cart-store";
import helper from "@/utils/helper";
import Image from "next/image";
import React from "react";

const Order: React.FC<Cart> = ({ image, name, qty, sell_price }) => {
  return (
    <div className="flex py-1 items-center space-x-5">
      <div className="relative h-14 w-14">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between ">
          <h6 className="font-medium mb-2">{name}</h6>
          <h6 className="font-medium mb-2">
            {helper.number(sell_price * (qty ?? 0), "Rp")}
          </h6>
        </div>
        <p className="text-sm text-gray-500">Qty : {qty}</p>
      </div>
    </div>
  );
};

export default Order;
