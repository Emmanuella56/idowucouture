import React from "react";
import Stick from "../../assets/Golf Stick.png"
import Balls from "../../assets/Golf Balls.png"
import Bags from "../../assets/Golf Bag.png"
import Shirt from '../../assets/Mens Shirt.png'
import Footwear from "../../assets/Footwear.png"
import Glooves from '../../assets/Glooves.png'
import GolfGlooves from "../../assets/Golf Gloove.png"

const Categories = () =>{
    
    return(
        <div  className="p-7 font-[poppins] text-center tracking-wider md:pl-15 md:gap-10">
            <h1 className="text-4xl md:text-[50px] md:font-bold">Shop by Categories</h1>
            
                <div className="grid grid-cols-2 gap-3 items-center mt-5  md:grid-cols-3">
                    
                    <div className="md:w-[350px] md:h-[400px] ">
                        <img src={Stick} alt="Stick" className="w-full  bg-gray-200 " />
                        <p className="py-2 ">Golf Clubs</p>
                    </div>

                    <div className="md:w-[350px] md:h-[400px]">
                        <img src={Balls} alt="Stick" className="w-full  bg-gray-200 " />
                        <p className="py-2">Golf Balls</p>
                    </div>
                    
                    <div className="md:w-[350px] md:h-[400px]">
                        <img src={Bags} alt="Stick" className="w-full  bg-gray-200 " />
                        <p className="py-2">Golf Bags</p>
                    </div>

                    <div className="md:w-[350px] md:h-[400px]">
                        <img src={Shirt} alt="Stick" className="w-full h-35 md:h-[300px]  bg-gray-200 " />
                        <p className="py-2">Clothing & Rainwears</p>
                    </div>

                    <div className="md:w-[350px] md:h-[400px]">
                        <img src={Footwear} alt="Stick" className="w-full bg-gray-200 " />
                        <p className="py-2">Footwears</p>
                    </div>

                    <div className="md:w-[350px] md:h-[400px]">
                        <img src={GolfGlooves} alt="Stick" className="w-full h-35.5 md:h-[300px] bg-gray-200  " />
                        <p className="py-2">Accessories</p>
                    </div>
                </div>
            
            
           
        </div>
    )
}

export default Categories