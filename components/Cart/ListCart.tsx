import React from "react";
import Cart from "./Cart";

const ListCart = () => {
  return (
    <div>
      <div>
        <Cart />
      </div>
      <div className="flex justify-center py-5 items-center">
        <button className="text-red-500 font-semibold">
          <h4>Hapus Keranjang</h4>
        </button>
      </div>
    </div>
  );
};

export default ListCart;
