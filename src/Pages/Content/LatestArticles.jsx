import React from "react";
import GolfShoe from "../../assets/GolfShoe.png"
import GolfShoeTwo from "../../assets/GolfShoe (2).png"
import GolfCup from "../../assets/Golf Cup.png"
import { TiArrowRight } from "react-icons/ti";


const LatestArticle = () =>{

    return(
        <div className="font-[poppins] p-7 md:p-15">

            <div className="md:flex md:justify-between md:py-5">
                    <h1 className="text-4xl font-semibold py-4 md:text-[50px]">Latest Articles</h1>
                <a href=" " className=" flex items-center underline decoration-solid ml-50   md:text-xl">
                    View More 
                    <TiArrowRight />
                </a>
            </div>
           

            <div className="md:flex justify-around">  
                <div className="my-4 md:w-[350px] md:text-xl">
                    <img src={GolfShoe} alt="FootWear" className="w-full" />
                    <p >Air Jordan x Travis Scoott Event</p>
                    <a href="" className="flex items-center underline decoration-solid ">
                        Read More
                        <TiArrowRight />
                    </a>
                </div>

                <div className="my-4 md:w-[350px] md:text-xl">
                    <img src={GolfShoeTwo} alt="FootWear" className="w-full" />
                    <p >The timee Cic on the green</p>
                    <a href="" className=" flex items-center underline decoration-solid ">
                        Read More
                        <TiArrowRight />
                    </a>
                </div>

                <div className="my-4 md:w-[350px] md:text-xl">
                    <img src={ GolfCup} alt="FootWear" className="w-full" />
                    <p >2023 Ryder Cup</p>
                    <a href="" className=" flex items-center underline decoration-solid ">
                        Read More
                        <TiArrowRight /> 
                        
                    </a>
                </div>


            </div>

            
        </div>
    )
}

export default LatestArticle