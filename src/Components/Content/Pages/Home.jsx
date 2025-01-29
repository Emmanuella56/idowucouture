import React from "react";
import Bat from "../../../assets/bat.jpeg"
import Featured from "./Featured.jsx";
import Categories from "./Categories.jsx";
import PromoTimer from "./PromoTimer.jsx";
import ShopCollection from "./ShopCollection.jsx";
import LatestArticle from "./LatestArticles.jsx";
import NewsLetter from "./NewsLetter.jsx";
import NewsFeed from "./NewsFeed.jsx";
import ContactUs from "../../Footer/ContactUs.jsx"; 


import { useNavigate } from "react-router-dom";


const HomeImage = () =>{

    const navigate = useNavigate()

    return(
    
        <div>

       <section id="home" className="w-full relative bg-black h-[810px] md:h-[800px]  md:max-w-screen-3xl ">

            
                <img src={Bat} alt="socker" className="md:h-full md:absolute md:right-0 md:w-[1400px]"/>
            


            <div className="absolute top-96 text-center text-white         md:pt-80 md:bg-gradient-to-l md:from-transparent md:to-black md:text-left md:p-20  md:top-1 md:h-full  md:w-full " >
             
                <div className=" bg-gradient-to-b from-transparent to-black px-10 pt-25     md:w-[350px] md:bg-none md:px-0 md:pt-0 ">
                    <h2 className="text-4xl-custom font-[poppins] bg-linear-gradient bg-clip-text  md:text-[52px]">More than <span>just a game.</span> <span>It's a lifestyle.</span></h2>
                </div>
                
                <p className="text-lg px-10 py-4           md:text-[17px] md:px-0  md:w-[350px]">Whether you're just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.</p>
                    
                <button 
                onClick={() => navigate("shopcollection")} 
                className="bg-emerald-400 text-black py-3 px-15 rounded-lg hover:bg-emerald-500">
                    Shopping Now
                    </button>
           
            </div>
        
        </section>
        
        <section id="featured">
         <Featured />
       </section>
 
       <section id="categories">
         <Categories />
       </section>
 
       <section id="promotimer">
         <PromoTimer />
       </section>
 
       <section id="shopcollection">
         <ShopCollection />
       </section>
 
       <section id="latestarticle">
         <LatestArticle />
       </section>
 
       <section id="newsletter">
         <NewsLetter />
       </section>
 
       <section id="newsfeed">
         <NewsFeed />
       </section>

       <section id="contact">
        <ContactUs />
      </section>

       </div>
       
    )
}

export default HomeImage