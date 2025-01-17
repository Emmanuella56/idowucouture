import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import GolfGloove from '../../assets/Golf Gloove.png'
import GolfStickBag from '../../assets/GolfStick_Bag.png'
import  GolfBlackShoe from '../../assets/Golf_BlackShoe.png'


import Glooves from '../../assets/Glooves.png'
import Shirt from '../../assets/Mens Shirt.png'
           
const Featured = () =>{

    return(
       <div className="pl-7 pt-8 md:p-15 ">
           
           <div className="flex justify-between items-center ">
                <h2 className="font-bold text-3xl font-[poppins] md:text-[50px]">Featured</h2>
                <div className="flex gap-2 text-slate-700 pr-7">
                    <FaRegCircleDot className="text-black" />
                    <GoDotFill />
                    <GoDotFill />
                </div>
            </div>
            
            <div className="flex gap-5 mt-8  [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll   md:gap-15 md:mt-15 ">
                
                <div>
                    
                    <div className="flex flex-col w-57.5 md:w-70">

                            <div className='relative h-77 bg-gray-200 shadow-md'>
                                
                                <div className="flex justify-between mx-4 mt-4">
                                    <h1 className=" bg-white text-sm font-bold text-black px-3 rounded">HOT</h1>
                                    <GoDotFill className="text-white"/>
                                </div>
                                
                                
                                <img src={Glooves} alt="golf gloove" className="h-61.5 md:mx-5" />
                                <button className="absolute mt-[-20px] mx-6 bg-black text-white text-sm py-2 px-14 rounded-lg md:mx-12">Add to cart</button> 
                            </div>

                            <div className="my-2 mx-1 font-bold text-sm">
                                <p >
                                <span className="flex ">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </span>
                                
                                    <span>Shark - Men's cabretta white golf glove</span><br/>$19.00
                                </p>
                            </div>

                    </div>

                </div>

                <div>
                    
                    <div className="flex flex-col w-57.5 md:w-70">

                            <div className='relative h-77 bg-gray-200 shadow-md'>
                                
                                <div className="flex justify-between mx-4 mt-4">
                                    <h1 className=" bg-white text-sm font-bold text-black px-3 rounded ">HOT</h1>
                                    <GoDotFill className="text-white"/>
                                </div>

                                <p className="bg-emerald-500 text-sm mx-4 mt-1 font-bold text-white w-13 text-center rounded md:visible-none ">-50%</p>
                                
                                <img src={Shirt} alt="golf gloove" className="h-61.5 m-0 md:mx-5" />
                                <button className="absolute mt-[-44px] mx-6 bg-black text-white text-sm py-2 px-14 rounded-lg md:mx-12 ">Add to cart</button> 
                            </div>

                            <div className="my-2 mx-1 font-bold text-sm">
                                <p >
                                <span className="flex ">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </span>
                                
                                    <span>Grey Norman<br/> Logo Golf Po</span><br/>$24.99
                                </p>
                            </div>

                    </div>

                </div>
                
                <div>
                    
                    <div className="flex flex-col w-57.5 md:w-70">

                            <div className='relative h-77 bg-gray-200 shadow-md'>
                                
                                <div className="flex justify-between mx-4 mt-4">
                                    <h1 className=" bg-white text-sm font-bold text-black px-3 rounded ">HOT</h1>
                                    <GoDotFill className="text-white"/>
                                </div>

                                <p className="bg-emerald-500 text-sm mx-4 mt-1 font-bold text-white w-13 text-center rounded md:invisible">-50%</p>
                                
                                <img src={GolfGloove} alt="golf gloove" className="h-61.5 mt-[-6px] md-mx-5" />
                                <button className="absolute mt-[-44px] mx-6 bg-black text-white text-sm py-2 px-14 rounded-lg      md:mt-[-40px] md:mx-12">Add to cart</button> 
                            </div>

                            <div className="my-2 mx-1 font-bold text-sm">
                                <p >
                                <span className="flex ">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </span>
                                
                                    <span>G/FORE - Mens Left Glove Snow<br/> 2023</span><br/>$30.00
                                </p>
                            </div>

                    </div>

                </div>

                <div>
                    
                    <div className="flex flex-col w-57.5 md:w-70">

                            <div className='relative h-77 bg-gray-200 shadow-md'>
                                
                                <div className="flex justify-between mx-4 mt-4">
                                    <h1 className=" bg-white text-sm font-bold text-black px-3 rounded ">HOT</h1>
                                    <GoDotFill className="text-white"/>
                                </div>
                                <p className="bg-emerald-500 text-sm mx-4 mt-1 font-bold text-white w-13 text-center rounded md:invisible">-50%</p>
                                
                                <img src={GolfStickBag} alt="golf gloove" className="h-61.5 m-0 md:mx-5" />
                                <button className="absolute mt-[-44px] mx-6 bg-black text-white text-sm py-2 px-14 rounded-lg md:mx-12">Add to cart</button> 
                            </div>

                            <div className="my-2 mx-1 font-bold text-sm">
                                <p >
                                <span className="flex ">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </span>
                                
                                    <span>Utility Rover-R Double Strap Bag<br/> All Black - 2023</span><br/>$209.99
                                </p>
                            </div>

                    </div>

                </div>

                <div>
                    
                    <div className="flex flex-col w-57.5  md:w-70">

                            <div className='relative h-77 bg-gray-200 shadow-md'>
                                
                                <div className="flex justify-between mx-4 mt-4">
                                    <h1 className=" bg-white text-sm font-bold text-black px-3 rounded">HOT</h1>
                                    <GoDotFill className="text-white"/>
                                </div>
                                <p className="bg-emerald-500 text-sm mx-4 mt-1 font-bold text-white w-13 text-center rounded ">-50%</p>
                                
                                <img src={GolfBlackShoe} alt="golf gloove" className="h-61.5 m-0 md:mx-5" />
                                <button className="absolute mt-[-44px] mx-6 bg-black text-white text-sm py-2 px-14 rounded-lg  md:mx-12">Add to cart</button> 
                            </div>

                            <div className="my-2 mx-1 font-bold text-sm">
                                <p >
                                <span className="flex ">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </span>
                                
                                    <span>Air Jordan 1 Low O<br/>Iron Grey - SS23 </span><br/>$111.99 <span className="invisible md:visible text-gray-200 line-through">$200.00</span>
                                </p>
                            </div>

                    </div>

                </div>

                {/* <div>
                    
                    <div className="flex flex-col w-57.5 md:w-70">

                            <div className='relative h-77 bg-gray-200 shadow-md'>
                                
                                <div className="flex justify-between mx-4 mt-4">
                                    <h1 className=" bg-white text-sm font-bold text-black px-3 rounded">HOT</h1>
                                    <GoDotFill className="text-white"/>
                                </div>
                                <p className="bg-emerald-500 text-sm mx-4 mt-1 font-bold text-white w-13 text-center rounded">-50%</p>
                                
                                <img src={Shirt} alt="golf gloove" className="h-61.5 m-0" />
                                <button className="absolute mt-[-44px] mx-6 bg-black text-white text-sm py-2 px-14 rounded-lg md:mx-12">Add to cart</button> 
                            </div>

                            <div className="my-2 mx-1 font-bold text-sm">
                                <p >
                                <span className="flex ">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </span>
                                
                                    <span>Grey Norman<br/> Logo Golf Po</span><br/>$24.99
                                </p>
                            </div>

                    </div>

                </div>       */}
               
                    
            </div>
       </div> 
    )
}

export default Featured