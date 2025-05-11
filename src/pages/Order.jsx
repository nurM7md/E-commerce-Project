import React from "react";
import {  useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate()
  return (
    <div className="container py-10 m-auto">
      <h2 className="text-3xl font-bold ">Thank you for your order !</h2>
      <p className="py-3 font-medium text-slate-900">
        Your order has been placed successfully you will receive an email
        confirmation
      </p>

      <div className="py-3 my-10 bg-gray-300 px-7 rounded-2xl">
        <h3 className="text-xl font-semibold text-slate-950">order Summary </h3>
        <p className="py-2 text-lg text-slate-600">orderNumber : {order.orderNumber}</p>
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Shipping Information </h2>
          <p>{order.shippingInformation.name}</p>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h3 className="py-2 text-xl font-semibold text-slate-950">Products Ordered</h3>

          {order.products.map((product) => (
            <div className="flex flex-row justify-between text-lg text-slate-600">
              <p >
                {product.name} (x {product.quantity})
              </p>
              <p >$ {product.price * product.quantity} </p>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between py-3 text-xl font-semibold text-slate-950">
          <span >Total Price : </span>
          <span>$ {order.totalPrice}</span>
        </div>
        
      </div>
      <button className="px-3 py-2 text-lg text-white bg-green-800 rounded-lg">Order tracking</button>
        <button className="px-3 py-2 mx-3 text-lg text-white bg-red-800 rounded-lg"
        onClick={()=>navigate('/')}>continue shopping</button>
    </div>
  );
};

export default Order;
