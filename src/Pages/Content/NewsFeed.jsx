import React from "react";
import PickGolfStick from "../../assets/ManPickGolfStick.jpeg"
import GolfRide from "../../assets/GolfRide.jpeg"
import ManGolfPose from "../../assets/ManGolfItemPosture.jpeg"
import ManWalkGolf from "../../assets/ManWalkGolf.jpeg"
import ManGolfing from "../../assets/ManGolfing.jpeg"
import SetGolfRide from "../../assets/SetOfGolfRide.jpeg"
const NewsFeed = () =>{

    return (
        <div >
            <div className="text-center tracking-wide my-10 ">
                <h3 className="my-3 text-gray-500 font-bold">NEWSFEED</h3>
                <h1 className="text-4xl my-3 font-[poppins]  text-bold">Instagram</h1>
                <p className="tracking-tight">Follow us on social media for more discount & promotions</p>
                <p className="m-3 text-gray-500 font-medium">@3elegant_official</p>
            </div>

            <div className="grid grid-cols-2 md:flex ">
                <div className="md:w-[300px] md:h-[250px]"><img src={ PickGolfStick } alt="Pick Golf Stick" className="h-40 w-full md:h-full"/></div>
                <div className="md:w-[300px] md:h-[250px]"><img src={GolfRide} alt="Golf Ride" className="h-40 w-full  md:h-full"/></div>
                <div className="md:w-[300px] md:h-[250px]"><img src={ManGolfPose} alt="Man Golf Pose" className="h-40 w-full md:h-full"/></div>
                <div className="md:w-[300px] md:h-[250px]"><img src={ManGolfing} alt="Man Golfing" className="h-40 w-full md:h-full"/></div>
                <div className="md:w-[300px] md:h-[250px]"><img src={SetGolfRide} alt="Set Golf Ride" className="h-40 w-full md:h-full"/></div>
                <div className="md:w-[300px] md:h-[250px]"><img src={ManWalkGolf} alt="Man Walk Golf" className="h-40 w-full md:h-full"/></div>
            </div>
           
        </div>

    )
}

export default NewsFeed