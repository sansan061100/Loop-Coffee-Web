import { MAP_KEY } from "@/config/env";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import MyLocationButton from "./MyLocationButton";
import { useMapStore } from "@/store/map-store";
import useMap from "@/hooks/useMap";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { useMapSelectedStore } from "@/store/map-selected-store";

const MapPicker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [address, setAddress] = useState({
    long: "",
    short: "",
  });

  // initialize google map
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAP_KEY,
    region: "ID",
    language: "id",
  });

  // update location to state tmp
  const updateLocation = async (lat: number, lng: number) => {
    setIsLoading(true);
    setLocation({
      lat,
      lng,
    });
    const newAddress: any = await getGeolocation(lat, lng);
    setAddress({
      long: newAddress.address,
      short: newAddress.shortAddress,
    });
    setIsLoading(false);
  };

  // get location from browser
  const { getGeolocation } = useMap();
  const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await updateLocation(latitude, longitude);
      },
      async (err) => {
        console.log(err);
      }
    );
  };

  // initialize location from store
  const locationStore = useMapStore((state) => state.location);
  useEffect(() => {
    setLocation({
      lat: locationStore.lat,
      lng: locationStore.long,
    });
    setAddress({
      long: locationStore.address,
      short: locationStore.shortAddress,
    });
  }, [locationStore]);

  const onChangeMarker = async (e: google.maps.MapMouseEvent) => {
    const { lat, lng }: any = e.latLng?.toJSON();
    await updateLocation(lat, lng);
  };

  const router = useRouter();
  const setLocationToDB = useMapStore((state) => state.setLocation);
  const handleSubmitLocation = () => {
    setLocationToDB({
      lat: location.lat,
      long: location.lng,
      address: address.long,
      shortAddress: address.short,
    });
    toast("Berhasil mengubah lokasi");
    router.back();
  };

  // handle selected search
  const selectedLocation = useMapSelectedStore((state) => state.location);
  useEffect(() => {
    if (selectedLocation.lat !== 0) {
      setLocation({
        lat: selectedLocation.lat,
        lng: selectedLocation.long,
      });
      setAddress({
        long: selectedLocation.address,
        short: selectedLocation.shortAddress,
      });
    }
  }, [selectedLocation]);

  return (
    <div className="flex h-screen flex-col">
      {isLoaded ? (
        <div className="flex-1 relative">
          <GoogleMap
            zoom={18}
            clickableIcons={false}
            center={location}
            mapContainerClassName="h-full w-full"
            options={{
              fullscreenControl: false,
              mapTypeControl: false,
              zoomControl: false,
              streetViewControl: false,
            }}
          >
            <Marker position={location} draggable onDragEnd={onChangeMarker} />
          </GoogleMap>
          <MyLocationButton onClick={getMyLocation} />
        </div>
      ) : (
        <div className="animate-pulse flex-1">
          <div className="h-full w-full bg-gray-200" />
        </div>
      )}
      <div className="flex-1 p-5">
        <h1 className="font-bold text-lg">Pilih Alamat Pengantaran</h1>
        <div className="mt-5">
          {!isLoading ? (
            <p>{address.long}</p>
          ) : (
            <div className="animate-pulse">
              <div className="h-4 w-full bg-gray-200 rounded-sm"></div>
              <div className="h-4 w-4/12 mt-2 rounded-sm bg-gray-200"></div>
            </div>
          )}
        </div>
      </div>
      <div className="footer-container">
        <button
          className="btn btn-primary w-full"
          onClick={handleSubmitLocation}
        >
          Konfirmasi Alamat
        </button>
      </div>
    </div>
  );
};

export default MapPicker;
