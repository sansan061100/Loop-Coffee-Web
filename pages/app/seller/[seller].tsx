const CartMenu = dynamic(() => import("@/components/Cart/CartMenu"), {
  ssr: false,
});
import DetailLayout from "@/components/Layout/DetailLayout";
import LoadingDetail from "@/components/Seller/LoadingDetail";
import Product, { ProductProps } from "@/components/Seller/Product";
import { useCartStore } from "@/store/cart-store";
import http from "@/utils/http";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, ReactElement } from "react";
import { useQuery } from "react-query";
import { shallow } from "zustand/shallow";

interface Category {
  id: number;
  name: string;
  slug: string;
  product: ProductProps[];
}

const Seller = () => {
  const { query } = useRouter();
  const { isLoading, data } = useQuery(["seller", query.seller], async () => {
    const req = await http.get(`outlet/${query.seller}`);
    return req.data?.result;
  });

  const [cart, setCart, store, setStore] = useCartStore(
    (state) => [state.data, state.setCart, state.store, state.setStore],
    shallow
  );

  const handleAddCart = (val: ProductProps) => {
    setCart({ ...val, qty: 1, outlet_id: data?.outlet.id });
    // check if store already set
    setStore({
      id: data?.outlet.id,
      name: data?.outlet.name,
      address: data?.outlet.address,
    });
  };

  return (
    <div>
      {isLoading ? (
        <LoadingDetail />
      ) : (
        <Fragment>
          <div className="border-b">
            <div className="h-72 bg-primary-300 w-full relative">
              {data?.outlet.banner && (
                <Image
                  src={data?.outlet.banner}
                  alt={data?.outlet.name}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <div className="p-5">
              <div className="flex  items-center justify-between">
                <h3 className="font-bold text-xl">{data?.outlet.name}</h3>
              </div>
              <p className="mt-3 text-gray-500">{data?.outlet.address}</p>
            </div>
          </div>
          <div className="pb-40">
            {data?.kategori.map((val: Category) => (
              <div key={val.id}>
                <h4 className="text-lg font-bold px-5 py-3 bg-gray-50">
                  {val.name}
                </h4>
                {val.product.map((item) => (
                  <Product
                    key={item.id}
                    {...item}
                    onClick={() => handleAddCart(item)}
                  />
                ))}
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

Seller.getLayout = (page: ReactElement) => {
  return (
    <DetailLayout title="Produk" navEnd={<CartMenu />}>
      {page}
    </DetailLayout>
  );
};

export default Seller;
