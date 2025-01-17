import React, { useState, useEffect } from "react";
import GolfItems from "../../assets/Golf Items.png";

const PromoTimer = () => {
  const [time, setTime] = useState({
    month: "00",
    hour: "00",
    minute: "00",
    second: "00",
  });

  useEffect(() => {
    
    const interval = setInterval(() => {
      
      const now = new Date();
      
      setTime({
        month: String(now.getMonth() + 1).padStart(2, "0"),
        hour: String(now.getHours()).padStart(2, "0"),
        minute: String(now.getMinutes()).padStart(2, "0"),
        second: String(now.getSeconds()).padStart(2, "0"),
      });

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:flex md:flex-row-reverse bg-black items-center md:w-full md:h-[500px] md:mb-10">

    
         
          <div className="p-7   text-white text-lg   md:w-full">
            
            <h4 className="my-4 text-emerald-300 text-lg font-[poppins]">LIMITED EDITION</h4>
            <h1 className="text-3xl text-justify mb-4 font-[poppins]">Hurry up! 30% OFF</h1>
            <p>Find clubs that are right for your game</p>
            <br />
            <p>Offer expires in:</p>

            <div className="flex gap-3 mt-4">
              <div className="bg-white text-black p-3 rounded-lg text-lg shadow-md">{`${time.month}`}</div>
              <div className="bg-white text-black p-3 rounded-lg text-lg shadow-md">{`${time.hour}`}</div>
              <div className="bg-white text-black p-3 rounded-lg text-lg shadow-md">{`${time.minute}`}</div>
              <div className="bg-white text-black p-3 rounded-lg text-lg shadow-md">{`${time.second}`}</div>
            </div>

            <button className="bg-emerald-400 mt-4 p-2 text-black px-[52px] text-lg rounded-lg hover:bg-emerald-500 transition">
              Shop Now
            </button>
          </div>
      

          <div className="md:w-full md:h-full"> 
              <img src={GolfItems} alt="Golf equipment in a field" className="w-full md:h-full" />
          </div>
      
    </div>
  );
};

export default PromoTimer;
