import React from "react";
import { FiInstagram } from "react-icons/fi";
import { TbBrandFacebook } from "react-icons/tb";
import { TbBrandYoutube } from "react-icons/tb";
import { MdKeyboardArrowUp } from "react-icons/md";
import ApplePay from "../../assets/Apple Pay.png"
import AmericanExpress from "../../assets/American Express.png"
import MasterCard from "../../assets/Master.png"
import Stripe from "../../assets/Stripe.png"
import Visa from "../../assets/Visa.png"
import Paypal from "../../assets/Paypal.png"


const ContactUs = () => {

    return(

        <div className="bg-black text-white p-4 md:px-50  md:py-15 ">
           
            <div className="md:flex md:justify-between md:pb-20">

                <div>
                     <h1 className="font-[poppins] pl-7 py-3 text-xl  md:px-0 md:text-2xl">3legant<span className="text-gray-500">.</span></h1>
                    <p className="py-3 md:text-xl md:w-55">More than just a game. it's a lifestyle.</p>
                    <div className="flex gap-7  py-3">
                    <FiInstagram />
                    <TbBrandFacebook />
                    <TbBrandYoutube />
                    </div>
                </div>

                <div className="md:flex md:gap-25">
                    <hr className="w-full max-w-md border-gray-600 md:hidden"/>

                    <div className="grid py-3">
                        
                        <div className="flex justify-between items-center">
                        <a href="" className="py-3">Page</a> 
                        <p className="md:hidden"><MdKeyboardArrowUp /></p>
                        </div>
                        <a href="" className="py-3">Home</a>
                        <a href="" className="py-3">Shop</a>
                        <a href="" className="py-3">Product</a>
                        <a href="" className="py-3">Articles</a>
                        <a href="" className="py-3">Contact Us</a>
                    </div>

                    <hr className="w-full max-w-md border-gray-600 md:hidden"/>

                    <div className="grid py-3">

                        <div className="flex justify-between items-center">
                            <a href="" className="py-3">Info</a>
                            <p className="md:hidden">
                                <MdKeyboardArrowUp />
                            </p> 
                            
                        </div>
                            
                            <a href="" className="py-3">Shipping Policy</a>
                            <a href="" className="py-3">Return & Refund</a>
                            <a href="" className="py-3">Support</a>
                            <a href="" className="py-3">FAQs</a>
                            <a href="" className="py-3">Contact Us</a>
                    </div>
                    
                    <hr className="w-full max-w-md border-gray-600 md:hidden"/>

                    <div className="grid py-3 mb-8">
                        <a href="" className="py-3">Office</a>
                        <a href="" className="py-3">43111 Hai Trieu Street</a>
                        <a href="" className="py-3">District 1, HCMC</a>
                        <a href="" className="py-3">VIETNAM</a>
                        <a href="" className="py-3">84-756-3237</a>
                    </div>
                </div>
               
                

            </div>

            


            <hr className="w-full border-gray-600"/>

            <div className="md:flex md:justify-between md:flex-row-reverse md:pt-5">
                
                <div className="flex justify-between py-6 px-5 md:px-0 md:py-0 md:gap-2">
                    <img src={Visa} alt="" className="bg-white p-2  w-10 h-6 rounded       md:w-8 md:p-1 "/>
                    <img src={AmericanExpress} alt="" className="bg-white p-2  w-10 h-6 rounded      md:w-8 md:p-1"/>
                    <img src={MasterCard} alt="" className="bg-white p-2  w-10 h-6 rounded        md:w-8"/>
                    <img src={Stripe} alt="" className="bg-white p-2  w-10 h-6 rounded      md:w-8"/>
                    <img src={Paypal} alt="" className="bg-white p-2  w-10 h-6 rounded         md:w-8 md:p-1"/>
                    <img src={ApplePay} alt="" className="bg-white p-2 w-10 h-6 rounded       md:w-8"/>
                </div>
                
                <div className="md:flex md:flex-row-reverse md:gap-4">
                    
                    <div className="flex justify-center gap-20 pb-2 text-[10px] text-gray-500 md:gap-2">
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>

                    <div>
                        <p className="invisible text-[10px] md:visible">|</p>
                    </div>

                    <div>
                        <p className="text-[10px] font-[poppins] text-center">Copyright &#x00A9; 2023 3legant<span className="text-gray-500">.</span> All rights reserved </p>
                    </div>
                </div>
                
            </div>

            
        </div>
    )
}


export default ContactUs