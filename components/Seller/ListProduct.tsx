import React from "react";
import Product from "./Product";

const ListProduct = () => {
  return (
    <div className="pb-32">
      <div>
        <h4 className="text-lg font-bold px-5 py-3 bg-primary/10">Expreso</h4>
        <Product />
      </div>
    </div>
  );
};

export default ListProduct;
