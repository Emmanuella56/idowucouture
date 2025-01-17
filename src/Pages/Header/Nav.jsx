import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { BsHandbag } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";

const Nav = () =>{

    return(

       <div className="fixed left-0 right-0 top-6 bg-white flex justify-between items-center z-10 px-6 p-4">

            <div className="flex gap-2 items-center text-center  md:hidden">
                <p className="text-[16px]"> <TfiMenu /> </p>
                <p className="text-[14px] font-semibold">3legant.</p>
            </div>

            
            <div className="invisible md:visible text-[20px] md:pl-15 md:font-semibold tracking-wider font-[poppins] ">
                <p>idowucouture</p>
            </div>


            <div className=" hidden md:visible md:flex md:text-[14px] md:font-bold md:gap-10">
                <a>Home</a>
                <a className="md:flex items-center">Shop <MdKeyboardArrowDown /></a>
                <a className="md:flex items-center">Product <MdKeyboardArrowDown /></a>
                <a className="md:flex items-center">Contact Us</a>
            </div>

            <div className="flex gap-2 text-center md:pr-15 md:gap-4">
                <p className="hidden md:visible md:flex"><CiSearch   /></p>
                <p className="hidden md:visible md:flex"><PiUserCircleLight /></p>
                <p><BsHandbag  /></p>
                <p><Bs2CircleFill /></p>
            </div>

       </div> 
        

    )
}

export default Nav
