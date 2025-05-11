import React from "react";
import {
  FaShippingFast,
  FaLock,
  FaTag,
  FaHeadset,
  FaMoneyBillWave,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "free shipping",
      desc: "get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "support 24/7",
      desc: "we are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "Payment Secure",
      desc: "your payment information is safe with us",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "100% money secure",
      desc: "full refund if you are not satisfied ",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      desc: "enjoy the best prices ",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow 
          transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
