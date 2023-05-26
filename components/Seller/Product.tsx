import helper from "@/utils/helper";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  stock: number;
  id: 5;
  name: string;
  sell_price: number;
  image: string;
  category_id: number;
}

const Product: React.FC<Props> = ({ name, image, sell_price }) => {
  const router = useRouter();
  return (
    <div
      className="py-4 border-t last:border-b cursor-pointer px-5 flex hover:bg-gray-100 justify-between items-center"
      onClick={() => router.push("/app/seller/1")}
    >
      <div className="space-y-2">
        <h4 className="font-bold">{name}</h4>
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
  );
};

export default Product;
