import { TfiMenu } from "react-icons/tfi";
import { BsHandbag } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useState } from "react";

const Nav = () =>{
   
    const [tfidropdown, setTfiDropDown] = useState(false)
    const [dropdown, setDropDown] = useState(false)
    const [dropdownTwo, setDropDownTwo] = useState(false)
    const [btndropdown, setBtnDropDown] = useState(false)
    const [btnsearch, setBtnSearch] = useState(false)
    
    const navigate = useNavigate()

   

    

    return(
          <>
          <div className="fixed z-10 left-0 right-0 h-[50px] bg-white ">
                
                </div>
       <div className="fixed left-0 right-0 top-6 bg-white flex justify-between items-center z-10 px-6 p-4">

            <div className="flex gap-2 items-center text-center  md:hidden">
                <button onClick={() => setTfiDropDown(!tfidropdown)} className="text-[16px]"> <TfiMenu /></button>
                <div style={{display: tfidropdown ? "block ": "none"}} className="absolute z-10 block top-[30px]  w-[100px] border-black shadow-md rounded border-gray-500 bg-white">
                        <ul>
                        <Link><li className=" hover:bg-gray-200 p-2">Senior Set</li> </Link>
                        <Link><li className=" hover:bg-gray-200 p-2">Junior Set</li></Link>
                        <Link><li className=" hover:bg-gray-200 p-2">Mens Set</li></Link>
                        <Link><li className=" hover:bg-gray-200 p-2">Women Set</li></Link>
                        </ul>
                </div>

                <p className="text-[14px] font-semibold bg-white">3legant.</p>
            </div>

            
            <div className="invisible md:visible text-[20px] md:pl-15 md:font-semibold tracking-wider font-[poppins] ">
                <p>idowucouture</p>
            </div>

            <ul className=" hidden md:visible md:flex md:text-[14px] md:font-bold md:gap-10">
                <li><a href="/#home" 
            className="hover:text-emerald-600 cursor-pointer">Home</a></li>



                <li>
                    <div className="relative ">
                        <button className="md:flex items-center justify-between hover:text-emerald-600  cursor-pointer" onClick={() => setDropDown(!dropdown) }>Shop <MdKeyboardArrowDown /> 
                        </button>
                        <div style={{display: dropdown ? "block ": "none"}} className="absolute  block top-[30px]  w-[100px] border-black shadow-md rounded border-gray-500 bg-white">
                            <ul>
                                <Link><li className=" hover:bg-gray-200 p-2">Senior Set</li> </Link>
                                <Link><li className=" hover:bg-gray-200 p-2">Junior Set</li></Link>
                                <Link><li className=" hover:bg-gray-200 p-2">Mens Set</li></Link>
                                <Link><li className=" hover:bg-gray-200 p-2">Women Set</li></Link>
                            </ul>
                        </div>
                    </div>
                </li> 
                
                
                <li>
                    <div className="relative ">
                        <button className="md:flex items-center justify-between hover:text-emerald-600  cursor-pointer" onClick={() => setDropDownTwo(!dropdownTwo) }>Product <MdKeyboardArrowDown /> 
                        </button>
                        <div style={{display: dropdownTwo ? "block ": "none"}} className="absolute ml-15 block top-[30px]  w-[200px] border-gray-900 shadow-md rounded  bg-white">
                            
                            <ul>
                                <Link><li className=" hover:bg-gray-200 p-2">Accessories</li> </Link>
                                <Link><li className=" hover:bg-gray-200 p-2">Golf Bags</li></Link>
                                <Link><li className=" hover:bg-gray-200 p-2">Golf Balls</li></Link>
                                <Link><li className=" hover:bg-gray-200 p-2">Golf Club</li></Link>
                                <Link><li className=" hover:bg-gray-200 p-2">Footwears</li></Link>
                                <Link><li className=" hover:bg-gray-200 p-2">Clothes & Rainwears</li></Link>
                            </ul>                       
                        </div>
                    </div>
                </li>
                                

                <li> 
                    <a
                    href="/#contact"
                    className="md:flex items-center hover:text-emerald-600 cursor-pointer"
                    >
                        Contact Us
                    </a>
                </li>
            
            
            </ul>

            <div className="flex items-center gap-2 text-center md:pr-15 md:gap-4">
            
                <div className="relative ">
                    <button  onClick={() => setBtnSearch(!btnsearch) }><CiSearch   /> 
                    </button>
                    <div style={{display: btnsearch ? "block ": "none"}} className="absolute ml-[-120px]  md:ml-[-300px]   border-gray-900    bg-white">
                    <input type="search"  name="search" placeholder="search now"  className="hover:bg-gray-100 rounded shadow-md  w-[170px] md:w-[300px] p-1 "/>
                    </div>
                </div>

                <div className="relative ">
                    <button  onClick={() => setBtnDropDown(!btndropdown) }><PiUserCircleLight /> 
                    </button>
                    <div style={{display: btndropdown ? "block ": "none"}} className="absolute   top-[30px]  w-[100px] border-gray-900 shadow-md rounded border-gray-500 bg-white">
                        <button onClick={() => navigate('auth')} className=" hover:bg-gray-200 p-1 w-full" >Login</button>
                    </div>
                </div>

                <div>
                   <button><BsHandbag  /></button> 
                </div>
                <div>
                    <button><Bs2CircleFill /></button>
                </div>
                
            </div>
            
       </div> 
        <div>
          <Outlet />          
        </div>
     </>
    )
}

export default Nav
