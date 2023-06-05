import React from "react";
import Cart from "./Cart";
import { useCartStore } from "@/store/cart-store";
import { shallow } from "zustand/shallow";

const ListCart = () => {
  const [cart, destroyCart, destroyStore] = useCartStore(
    (state) => [state.data, state.destroyCart, state.destoryStore],
    shallow
  );

  const deleteCart = () => {
    const confm = confirm("Apakah anda yakin ingin menghapus keranjang?");
    if (!confm) return;
    destroyCart();
    destroyStore();
  };

  return (
    <div>
      <div>
        {cart.map((item) => (
          <Cart key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center py-5 items-center">
        <button className="text-red-500 font-semibold" onClick={deleteCart}>
          <h4>Hapus Keranjang</h4>
        </button>
      </div>
    </div>
  );
};

export default ListCart;
