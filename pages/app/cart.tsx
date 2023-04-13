import HomeLayout from "@/components/Layout/HomeLayout";
import React, { ReactElement } from "react";

const Cart = () => {
  return <div>Cart</div>;
};

Cart.getLayout = (page: ReactElement) => {
  return <HomeLayout title="Keranjang">{page}</HomeLayout>;
};

export default Cart;
