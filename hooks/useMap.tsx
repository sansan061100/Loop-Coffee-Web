/* eslint-disable react-hooks/exhaustive-deps */
import { MAP_KEY } from "@/config/env";
import { useMapStore } from "@/store/map-store";
import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-simple-toasts";
import { shallow } from "zustand/shallow";

const useMap = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useMapStore(
    (state) => [state.location, state.setLocation],
    shallow
  );

  const getGeolocation = async (lat: number, long: number) => {
    return new Promise(async (resolve, reject) => {
      try {
        const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${MAP_KEY}`;
        const res = await axios.get(URL);

        const results = res.data.results;

        if (!results || results.length === 0) {
          toast("Oops, something went wrong.");
        }

        const address = results[0]?.formatted_address;
        const shortAddress =
          results[0]?.address_components?.[1]?.short_name || address;

        resolve({
          lat,
          long,
          address,
          shortAddress,
        });
      } catch (error) {
        console.error(error);
        toast("Oops, something went wrong.");
        reject(error);
      } finally {
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    if (location.lat !== 0 && location.long !== 0) return;
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const myLocation: any = await getGeolocation(lat, long);
      setLocation({
        lat: myLocation.lat,
        long: myLocation.long,
        address: myLocation.address,
        shortAddress: myLocation.shortAddress,
      });
    });
  }, []);

  return {
    isLoading,
    location,
    getGeolocation,
  };
};

export default useMap;
