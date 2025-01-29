import React from "react";
import Stick from "../../../assets/Golf Stick.png"
import Balls from "../../../assets/Golf Balls.png"
import Bags from "../../../assets/Golf Bag.png"
import Shirt from '../../../assets/Mens Shirt.png'
import Footwear from "../../../assets/Footwear.png"
import GolfGlooves from "../../../assets/Golf Gloove.png"

const Categories = () =>{
    
    return(
        <div  className="p-7 font-[poppins] text-center tracking-wider      md:mt-20 ">
            <h1 className="text-4xl md:text-[50px] pb-5 md:font-bold">Shop by Categories</h1>
            
                <div className="grid grid-cols-2 gap-5 items-center text-sm mt-5 md:grid-cols-3">
                    
                    <div className="md:w-[280px] md:h-[400px] ">
                        <img src={Stick} alt="Stick" className="w-full  bg-gray-200 " />
                        <p className="py-2 ">Golf Clubs</p>
                    </div>

                    <div className="md:w-[280px] md:h-[400px]">
                        <img src={Balls} alt="Stick" className="w-full  bg-gray-200 " />
                        <p className="py-2">Golf Balls</p>
                    </div>
                    
                    <div className="md:w-[280px] md:h-[400px]">
                        <img src={Bags} alt="Stick" className="w-full  bg-gray-200 " />
                        <p className="py-2">Golf Bags</p>
                    </div>

                    <div className=" mt-6 md:mt-0 md:w-[280px] md:h-[400px]">
                        <img src={Shirt} alt="Stick" className="w-full h-35  md:h-[260.5px]  bg-gray-200 " />
                        <p className="py-2">Clothing & Rainwears</p>
                    </div>

                    <div className="md:w-[280px] md:h-[400px]">
                        <img src={Footwear} alt="Stick" className="w-full md:h-[260.5px] bg-gray-200 " />
                        <p className="py-2">Footwears</p>
                    </div>

                    <div className="md:w-[280px] md:h-[400px]">
                        <img src={GolfGlooves} alt="Stick" className="w-full h-35 md:h-[260.5px] bg-gray-200  " />
                        <p className="py-2">Accessories</p>
                    </div>
                </div>
            
            
           
        </div>
    )
}

export default Categories