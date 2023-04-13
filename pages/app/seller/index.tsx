import DetailLayout from "@/components/Layout/DetailLayout";
import React, { ReactElement } from "react";

const Seller = () => {
  return <div>Seller</div>;
};

Seller.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Produk">{page}</DetailLayout>;
};

export default Seller;
