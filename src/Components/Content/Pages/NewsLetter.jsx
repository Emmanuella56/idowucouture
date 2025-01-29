import React from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import GolfStickBall from "../../../assets/GolfStickBall.png"
import GolfGlooveBall from "../../../assets/GolfGlooveBall.png"


const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white w-full  text-center p-20  md:overflow-hidden md:h-[350px] md:flex-row md:justify-between">
     
     <div className="hidden md:flex w-[650pxpx] md:ml-[-70px] h-[400px] overflow-hidden">
        <img
          src={GolfGlooveBall}
          alt="Golf Glove and Ball"
          className="md:w-full h-full "
        />
      </div>
     
      <div className="items-center  ">   
          <h1 className="text-2xl font-[poppins] tracking-wide   md:text-[30px] md:p-2">Join Our Newsletter</h1>
          <p className="text-sm mb-6 md:text-md">
            Sign up for deals, new products, and promotions
          </p>
          
          <div className="flex items-center justify-between gap-30 px-7 m-2">
    
              <div className="flex items-center gap-2 w-28 ">
                <p className="text-[12px] md:text-md"> <RxEnvelopeClosed /> </p>
                <p className="text-[12px] md:text-md ">Email address</p>
              </div>
              <p className="text-[12px] md:text-md">Signup</p>
            
          </div>
          
          <hr className="w-full max-w-lg border-gray-200 md: max-w-2xl" />

      </div>
     
      <div className="hidden md:flex w-[650px] md:mr-[-150px] md:pt-30  overflow-hidden">
        <img
          src={GolfStickBall}
          alt="Golf Stick and Ball"
          className="w-full h-full object-cover"
        />
      </div>
   
    
    </div>
  );
};

export default NewsLetter;
