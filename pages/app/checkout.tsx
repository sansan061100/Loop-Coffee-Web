import ShippingMethod from "@/components/Checkout/ShippingMethod";
import DetailLayout from "@/components/Layout/DetailLayout";
import React, { ReactElement } from "react";

const Checkout = () => {
  return (
    <div className="w-full">
      <ShippingMethod />
    </div>
  );
};

Checkout.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Checkout">{page}</DetailLayout>;
};

export default Checkout;
