import { useMapStore } from "@/store/map-store";
import React from "react";
import useMap from "@/hooks/useMap";

const MapHeader = () => {
  const location = useMapStore((state) => state.location);
  const map = useMap();

  return (
    <a className="btn btn-ghost normal-case text-xl">{location.shortAddress}</a>
  );
};

export default MapHeader;
