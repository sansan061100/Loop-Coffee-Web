import { create } from "zustand";
import { Location } from "./map-store";
import { persist } from "zustand/middleware";

interface MapSelectedStore {
  location: Location;
  setLocation: (val: Location) => void;
}
export const useMapSelectedStore = create<MapSelectedStore>((set) => ({
  location: {
    address: "",
    lat: 0,
    long: 0,
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
}));
