import { MAP_KEY } from "@/config/env";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useMemo, useState, useEffect } from "react";
import MyLocationButton from "./MyLocationButton";
import axios from "axios";

const MapPicker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [address, setAddress] = useState("");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAP_KEY,
    region: "ID",
    language: "id",
  });

  const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    getMyLocation();
  }, []);

  useEffect(() => {
    if (location.lat === 0 && location.lng === 0) return;
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP_KEY}`;
    const fetchAddress = async () => {
      setIsLoading(true);
      await axios.get(URL).then((res) => {
        setAddress(res.data.results[0].formatted_address);
      });
      setIsLoading(false);
    };
    fetchAddress();
  }, [location]);

  const onChangeMarker = (e: google.maps.MapMouseEvent) => {
    const { lat, lng }: any = e.latLng?.toJSON();
    setLocation({
      lat,
      lng,
    });
  };

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
            <p>{address}</p>
          ) : (
            <div className="animate-pulse">
              <div className="h-4 w-full bg-gray-200 rounded-sm"></div>
              <div className="h-4 w-4/12 mt-2 rounded-sm bg-gray-200"></div>
            </div>
          )}
        </div>
      </div>
      <div className="footer-container">
        <button className="btn btn-primary w-full">Konfirmasi Alamat</button>
      </div>
    </div>
  );
};

export default MapPicker;
