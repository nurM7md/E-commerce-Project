import React from "react";
import manCategory from "../assets/images/man category.jpg";
import womanCategory from "../assets/images/women category.jpg";
import kidsCategory from "../assets/images/man category.jpg";

const CategorySection = () => {
  const category = [
    {
      title: "Men",
      imageUrl: manCategory,
    },
    {
      title: "Women",
      imageUrl: womanCategory,
    },
    {
      title: "Kids",
      imageUrl: kidsCategory,
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer ">
      {category.map((category, index) => (
        <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105">
          <img src={category.imageUrl} alt="pho" className="w-full h-full object-cover rounded-lg shadow-md"/>
          <div className="absolute top-20 left-12 ">
            <p className="text-xl font-bold text-white ">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
