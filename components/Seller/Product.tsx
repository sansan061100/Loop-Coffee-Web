import helper from "@/utils/helper";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export interface ProductProps {
  stock: number;
  id: number;
  name: string;
  sell_price: number;
  image: string;
  category_id: number;
  onClick?: () => void;
}

const Product: React.FC<ProductProps> = ({
  name,
  image,
  sell_price,
  onClick,
  stock,
}) => {
  return (
    <div
      onClick={stock == 0 ? undefined : onClick}
      className={`py-4 border-t last:border-b cursor-pointer px-5 space-x-5 flex   items-center `}
    >
      <button
        className={`btn ${
          stock == 0 ? "btn-disabled" : "btn-primary"
        } btn-circle btn-sm`}
      >
        <PlusIcon className="h-5 w-5" />
      </button>
      <div className="flex justify-between flex-1 items-center">
        <div className="space-y-2">
          <div className="flex  items-center space-x-3">
            <h4 className="font-bold">{name}</h4>
            {stock == 0 && (
              <p className="text-red-500 font-bold text-xs">
                (Persediaan habis)
              </p>
            )}
          </div>
          <h4>{helper.number(sell_price, "Rp")}</h4>
        </div>
        <div className="relative h-20 w-20">
          <Image
            src={image}
            alt="Detail Coffee"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
