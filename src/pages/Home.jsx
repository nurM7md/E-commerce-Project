import React, { useEffect } from "react";
import { Categories } from "../assets/mockData";
import heroImage from "../assets/images/homePage.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import { setProducts } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { mocData } from "../assets/mockData";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mocData));
  }, []);
  return (
    <div>
      <div className="px-4 mt-2 bg-white md:px-16 lg:px-24">
        <div className="container flex flex-col py-4 mx-auto space-x-2 md:flex-row">
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              Shop by Categories
            </div>
            <ul className="p-3 space-y-4 bg-gray-100 border">
              {Categories.map((category) => {
                console.log(category);
                return (
                  <li
                    key={category.id}
                    className="flex items-center text-sm font-medium"
                  >
                    <div className="w-2 h-2 mr-2 border border-red-500 rounded-full"></div>
                    {category.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative w-full mt-8 md:w-9/12 md:mt-0 h-96">
            <img src={heroImage} alt="ph" className="w-full h-full" />
            <div className="absolute top-16 left-8">
              <p className="mb-4 text-gray-600">NUR | E-shop</p>
              <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                MILLIONS + PRODUCTS
              </p>
              <button
                className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 
            transform transition-transform duration-300 rounded-full hover:scale-105"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />

        <div className="container py-12 mx-auto">
          <h2 className="mb-6 text-2xl font-bold text-center">Top products</h2>
          <div className="grid grid-cols-1 gap-6 cursor-pointer sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {products.products.slice(0, 5).map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
