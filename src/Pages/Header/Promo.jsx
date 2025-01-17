import React from "react";
import { BiSolidDiscount } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const Promo = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-emerald-500 flex justify-around items-center py-1 px-8 z-50 md:flex md:justify-center">
      
      <div className="flex items-center gap-2 md:pl-100">
        
        <p className="text-lg"><BiSolidDiscount /> </p> 
        <p>30% off storewide - Limited time!</p>
        <p className="hidden md:flex md:visible md:underline md:underline-offset-4"> 
          <a href="" className="flex items-center  decoration-solid text-[14px] ">
              Shop Now
          <GoArrowRight />
          </a>

        </p>
      </div>
      

    
      <button className="text-lg hover:text-gray-400 focus:outline-none md:pl-[450px]" aria-label="Close promo banner">
        <IoClose />
      </button>
    </div>
  );
};

export default Promo;
