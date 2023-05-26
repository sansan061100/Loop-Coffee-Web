import React from "react";
import Product from "./Product";

interface Props {
  data: {
    id: number;
    name: string;
    slug: string;
    product: {
      stock: number;
      id: 5;
      name: string;
      sell_price: number;
      image: string;
      category_id: number;
    }[];
  }[];
}
const ListProduct: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((val) => (
        <div key={val.id}>
          <h4 className="text-lg font-bold px-5 py-3 bg-gray-50">{val.name}</h4>
          {val.product.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
