import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

import GolfGloove from "../../assets/Golf Gloove.png";
import GolfStickBag from "../../assets/GolfStick_Bag.png";
import GolfBlackShoe from "../../assets/Golf_BlackShoe.png";
import Glooves from "../../assets/Glooves.png";
import Shirt from "../../assets/Mens Shirt.png";

const products = [
  { img: Glooves, title: "Men's Cabretta Glove", price: "$19.00" },
  { img: Shirt, title: "Grey Norman Logo Golf Polo", price: "$24.99" },
  { img: GolfGloove, title: "G/FORE - Men's Left Glove", price: "$30.00" },
  { img: GolfStickBag, title: "Utility Rover Bag - 2023", price: "$209.99" },
  { img: GolfBlackShoe, title: "Air Jordan 1 Low O", price: "$111.99" },
];

const Featured = () => {
  return (
    <div className="pl-7 pt-8 md:p-15">
     
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl font-[poppins] md:text-[50px]">
          Featured
        </h2>
        <div className="flex gap-2 text-slate-700 pr-7">
          <FaRegCircleDot className="text-black" />
          <GoDotFill />
          <GoDotFill />
        </div>
      </div>

     
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-5 mt-8 w-max animate-scroll md:gap-20 md:mt-15">
         
          {[...products, ...products].map((product, index) => (
            <div key={index} className="flex flex-col w-57.5 md:w-70">
              <div className="relative h-77 bg-gray-200 shadow-md">
                <div className="flex justify-between mx-4 mt-4">
                  <h1 className="bg-white text-sm font-bold text-black px-3 rounded">
                    HOT
                  </h1>
                  <GoDotFill className="text-white" />
                </div>
                <img src={product.img} alt={product.title} className="h-61.5 md:mx-5" />
                <button className="absolute mt-[-20px] mx-6 bg-black text-white text-sm py-2 px-14 rounded-lg md:mx-12">
                  Add to cart
                </button>
              </div>

              <div className="my-2 mx-1 font-bold text-sm">
                <p>
                  <span className="flex">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </span>
                  <span>{product.title}</span>
                  <br />
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
