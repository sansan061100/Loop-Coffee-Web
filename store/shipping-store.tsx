import { create } from "zustand";

interface ShippingStore {
  data: number;
  setShipping: (val: number) => void;
}
export const useShippingStore = create<ShippingStore>((set) => ({
  data: 1,
  setShipping: (val) => {
    set({ data: val });
  },
}));
