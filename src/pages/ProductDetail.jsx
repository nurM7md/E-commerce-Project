import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    const newproduct = products.find((product) => product.id === parseInt(id));
    setProduct(newproduct);
  }, [id, products]);

    const dispatch = useDispatch()


  const handleAddToCart =(e, product)=>{
      e.stopPropagation()
      e.preventDefault()
      dispatch(addToCart(product))
      alert("Product added succesfully")
    }

  if (!product) return <div>Loading...</div>;

  

  return (
    <div className="container px-4 py-8 mx-auto md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        
        {/*product img*/}
        <div className="flex justify-center py-4 shadow-md md:w-1/2 md:px-8 h-96 bg-slate-100">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>

        {/*Product Information */}
        <div className="flex flex-col items-center p-4 shadow-md md:w-1/2 md:p-16 gap-y-2 bg-slate-100">
          <h2 className="mb-2 text-3xl font-semibold">{product.name}</h2>
          <p className="mb-4 text-xl font-semibold text-gray-800">
            ${product.price}
          </p>

          <div className="flex items-center mb-4 gap-x-2">
            {/*<Label htmlfor='quantity' className= "mr-2">Quantity: </Label> */}
            <input
              id="quantity"
              type="number"
              min="1"
              className="w-16 p-1 border"
            />
            <button className="py-1.5 text-white bg-red-600 px-4 hover:bg-red-800" onClick={(e) => handleAddToCart(e , product)}>
              Add to Cart
            </button>
          </div>
          <div className="flex-col mt-4 gap-y-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Delivery & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask a Question
            </p>
          </div>
        </div>
        
      </div>
      <div className="mt-8">
        <h3 className="mb-2 text-xl font-bold">Product Description</h3>
        <p>Product description will goes here .</p>
      </div>
    </div>
  );
};

export default ProductDetail;
