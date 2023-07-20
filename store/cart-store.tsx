import { ProductProps } from "@/components/Seller/Product";
import toast from "react-simple-toasts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Cart extends ProductProps {
  qty?: number;
  outlet_id: number;
}

interface Store {
  name: string;
  address: string;
  id: number;
}

interface CartStore {
  data: Cart[];
  store: Store;
  setCart: (val: Cart, disableToast?: boolean) => void;
  setStore: (val: Store) => void;
  destroyCart: (id?: number) => void;
  destoryStore: () => void;
  updateCart: (id: number, qty: number) => void;
}

const cartStore = persist<CartStore>(
  (set, get) => ({
    data: [],
    store: {
      id: 0,
      address: "",
      name: "",
    },
    setCart: (val, disableToast) => {
      // check if product already in cart
      const isProductExist = get().data.find((item) => item.id === val.id);
      const isStoreExist = get().store.id === val.outlet_id;

      if (isStoreExist) {
        if (isProductExist) {
          // if exist, update qty
          const newData = get().data.map((item) => {
            const qty = item.qty ? item.qty + 1 : 2;

            if (qty > item.stock) {
              toast("Stok tidak mencukupi");
              return item;
            }

            if (item.id === val.id) {
              return {
                ...item,
                qty: qty,
              };
            }

            return item;
          });
          set({ data: newData });
        } else {
          set({ data: [...get().data, val] });
        }
      } else {
        // @ts-ignore
        if (parseInt(val.stock) === 0) {
          toast("Stok tidak mencukupi");
          return;
        } else {
          set({ data: [val] });
        }
      }

      if (!disableToast) {
        toast("Berhasil menambahkan ke keranjang");
      }
    },
    setStore: (val) => {
      set({ store: val });
    },

    destroyCart: (id) => {
      if (id) {
        const newData = get().data.filter((item) => item.id !== id);
        set({ data: newData });
      } else {
        set({ data: [] });
      }
    },

    destoryStore: () => {
      set({
        store: {
          id: 0,
          address: "",
          name: "",
        },
      });
    },

    updateCart: (id, qty) => {
      const newData = get().data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: qty,
          };
        }

        return item;
      });
      set({ data: newData });
    },
  }),
  {
    name: "cart-store",
  }
);
export const useCartStore = create(cartStore);
