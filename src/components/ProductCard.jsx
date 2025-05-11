import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart =(e, product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product added succesfully")
  }
  return (
    <Link to={`/product/${product.id}`}>
    <div className="relative p-4 transition-transform duration-300 transform bg-white border rounded shadow hover:scale-105">
      <img 
      src={product.image} 
      alt={product.name} 
      className="object-contain w-full h-48 mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500"/>
        <FaStar className="text-yellow-500"/>
        <FaStar className="text-yellow-500"/>
        <FaStar className="text-yellow-500"/>
      </div>
      <div 
      className="absolute flex items-center justify-center w-8 h-8 transition-transform bg-red-600 rounded-full bottom-4 right-2 group text-white-text-sm hover:w-32 hover:bg-red-700"
      onClick={(e) => handleAddToCart(e , product)}>
        <span className="text-white group-hover:hidden">+</span>
        <span className="hidden text-white group-hover:block">Add to cart</span>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
