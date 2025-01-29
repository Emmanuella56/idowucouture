import GolfBag from "../../../assets/GolfBag.png"
import MenSet from "../../../assets/Men Set.png"
import WomenSet from "../../../assets/Women Set.png"
import { TiArrowRight } from "react-icons/ti";
import { Link, Outlet} from 'react-router-dom'

const ShopCollection = () =>(


    <div className="font-[poppins] p-7 md:px-50 md:mt-7">
        
        <h1 className="text-4xl font-bold text-center py-4      md:text-[50px] md:p-20">Shop Collection</h1>
        
            <div className="md:grid md:grid-cols-2  md:gap-4 ">

                <div className="relative  mb-7 h-[400px] md:ml-[-170px]  md:h-[450px] md:mb-0  md:w-[400px] md:row-span-2">
                    <img src={GolfBag} alt="Golf Bag" className="  absolute md:h-full 0"/>
                    <h1 className="absolute mt-70 md:mt-90 px-10 font-medium text-4xl"> Junior Set</h1>
                    <Link to="featured" className="absolute mt-80 md:mt-100 text-lg px-10 flex items-center underline decoration-solid ">
                            Collection
                            <TiArrowRight />
                    </Link>
                </div>
        
                <div className="flex bg-gray-200 mb-4 md:w-[400px] md:mb-0 "> 

                    <div className="pl-6 py-10"> 
                        <h1 className="  font-medium text-2xl w-35 "> Men's Set</h1>
                        <Link className=" flex items-center underline decoration-solid ">
                            Collection
                            <TiArrowRight />
                        </Link >
                    </div>
                    <div>
                        <   img src={MenSet} alt="Golf Bag"  className="w-100 h-full pr-7 md:h-[150px]"/> 
                    </div>
                </div>


                <div className="flex mb-4 bg-gray-200 justify-between md:w-[400px] md:mb-0 "> 
                    <div className="pl-6 py-10"> 
                        <h1 className="  font-medium text-2xl"> Women's Set</h1>
                        <Link  className=" flex items-center underline decoration-solid ">
                            Collection
                            <TiArrowRight />
                        </Link >
                    </div>

                    <div>
                    <   img src={WomenSet} alt="Golf Bag"  className="w-35 h-full md:w-full md:h-[150px]"/> 
                    </div>
                </div>

            </div>
       
            <Outlet />
    </div>

    
)

export default ShopCollection