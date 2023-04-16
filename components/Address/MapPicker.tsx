import { MAP_BOX_TOKEN } from "@/config/env";
import React, { useCallback, useState } from "react";
import Map, {
  GeolocateControl,
  GeolocateControlRef,
  GeolocateResultEvent,
} from "react-map-gl";

const MapPicker = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const mapRef = useCallback((ref: GeolocateControlRef) => {
    if (ref) {
      ref.trigger();
    }
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 h-full relative">
        <Map
          initialViewState={{
            longitude: location.longitude,
            latitude: location.latitude,
            zoom: 14,
          }}
          mapboxAccessToken={MAP_BOX_TOKEN}
          attributionControl={false}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <GeolocateControl
            position="bottom-right"
            trackUserLocation={true}
            onGeolocate={(res: GeolocateResultEvent) => {
              alert("geolocate");
              setLocation({
                latitude: res.coords.latitude,
                longitude: res.coords.longitude,
              });
              console.log(res.coords.latitude);
            }}
            onTrackUserLocationStart={() => {
              alert("track start");
            }}
            fitBoundsOptions={{
              maxZoom: 22,
            }}
          />
        </Map>
      </div>
      <div className=" bg-white flex-1 shadow-md p-5">
        <h4 className="font-bold text-lg">Pilih Alamat Pengantaran</h4>
      </div>
    </div>
  );
};

export default MapPicker;
