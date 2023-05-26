import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Location {
  lat: number;
  long: number;
  address: string;
  shortAddress: string;
}
interface MapStore {
  location: Location;
  setLocation: (val: Location) => void;
}

const mapStore = persist<MapStore>(
  (set) => ({
    location: {
      lat: 0,
      long: 0,
      address: "",
      shortAddress: "",
    },
    setLocation: (val) => {
      set((state) => ({
        location: {
          ...state.location,
          ...val,
        },
      }));
    },
  }),
  {
    name: "map-store",
  }
);

export const useMapStore = create(mapStore);
