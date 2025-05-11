import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Shop = () => {
    const products = useSelector(state=> state.product)
  return (
    <div>
      <div className="px-4 py-12 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-6 text-2xl font-bold text-center">Shop</h2>
        <div className="grid grid-cols-1 gap-6 cursor-pointer sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {products.products.map((product ) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
