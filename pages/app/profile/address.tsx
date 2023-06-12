import DetailLayout from "@/components/Layout/DetailLayout";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useLayoutEffect } from "react";
const MapPicker = dynamic(() => import("@/components/Address/MapPicker"), {
  ssr: false,
});

const Address = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    // request permission to use location on iOS
    navigator.permissions
      .query({ name: "geolocation" })
      .catch(() => {
        alert("Please allow location access to use this feature.");
        router.back();
      })
      .then((res: any) => {
        if (res.state === "denied") {
          alert("Permission to access location was denied");
          router.back();
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <MapPicker />
    </div>
  );
};

Address.getLayout = (page: ReactElement) => {
  return (
    <DetailLayout
      title="Alamat"
      navEnd={
        <Link
          href={"/app/profile/address/search"}
          className="btn btn-ghost btn-circle"
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </Link>
      }
    >
      {page}
    </DetailLayout>
  );
};

export default Address;
