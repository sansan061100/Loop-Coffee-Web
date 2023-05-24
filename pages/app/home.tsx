import Seller, { SellerProps } from "@/components/Home/Seller";
import HomeLayout from "@/components/Layout/HomeLayout";
import Loading from "@/components/Seller/Loading";
import http from "@/utils/http";
import React, { ReactElement, useState, useEffect } from "react";
import { useQuery } from "react-query";
import toast from "react-simple-toasts";

const Home = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const { data, isLoading } = useQuery(
    ["sellers", location.latitude, location.longitude],
    async () => {
      if (location.latitude === 0 && location.longitude === 0) return;
      const req = await http.get(
        `outlet?lat=${location.latitude}&lng=${location.longitude}&radius=10000`
      );
      return req.data.result;
    }
  );

  useEffect(() => {
    const getPermission = async () => {
      if (navigator.geolocation) {
        // check permission
        try {
          const req = await navigator.permissions.query({
            name: "geolocation",
          });
          if (req.state == "granted") {
            await navigator.geolocation.getCurrentPosition((position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            });
          } else {
            toast("Location permission denied");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      }
    };
    getPermission();
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {data?.map((val: SellerProps, i: number) => (
        <Seller key={i} {...val} />
      ))}
      <div className="h-5 w-full pb-48" />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <HomeLayout title="Penjual Sekitar">{page}</HomeLayout>;
};

export default Home;
