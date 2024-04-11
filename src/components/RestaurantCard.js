import { CDN_URL } from "../utils/constants";
import {useState,useEffect,useContext} from "react";
import UserContext from "../utils/UserContext.js"

const RestaurantCard = (props) => {
    // console.log(props)
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    const {cloudinaryImageId, name, avgRating,cuisines,costForTwo,sla} = resData?.info;
    return (
        <div className = "m-4 p-4 w-[250px] h-[600px] rounded-lg bg-gray-200 hover:bg-green-200">
            <img className="rounded-2xl w-[230px] h-[200] px-2"
            src ={ CDN_URL + cloudinaryImageId}  alt='Food image' />
            <h3 className = "font-bold py-2 text-2xl text-black">{name}</h3>
            <h4 className = 'py-2 font-normal text-black'>{cuisines.join(", ")}</h4>
            <h4 className ='py-2 font-light text-black'>Rating: {avgRating}</h4>
            <h4 className ='py-2 font-mono text-black'>{costForTwo}</h4>
            <h4 className ='py-2 font-mono text-black'>{sla.deliveryTime} minutes</h4>
            <h4 className ='py-2 font-mono text-black'>User: {loggedInUser}</h4>

        </div>
    );

};

// Higher Order Component.
// Input -- RestaurantCard// Output - RetaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-1 p-2 rounded-r-lg"> Mudichur Road</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;