import DetailLayout from "@/components/Layout/DetailLayout";
import dynamic from "next/dynamic";
import React, { ReactElement } from "react";
import MapPicker from "@/components/Address/MapPicker";

const Address = () => {
  return (
    <div>
      <MapPicker />
    </div>
  );
};

Address.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Alamat">{page}</DetailLayout>;
};

export default Address;
