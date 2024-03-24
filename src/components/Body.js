import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from 'react';

const Body = () => {
    
    // State Variable - Super Powerful Variable
    const [listOfRestaurants,setListOfRestraunt] =useState(resList);
    // Similar to an 
    // let listOfRestaurants;

    // Normal JS Variable

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    // Using useState
                    const filteredList = listOfRestaurants.filter(res=> res.data.avgRating>3.9);
                    setListOfRestraunt(filteredList);
                    // End of useState
                    // Filter logic to get Hotel rating >4.1
                    // listOfRestaurants = listOfRestaurants.filter(res=> res.data.avgRating>4.1)
                    // console.log(listOfRestaurants)

                    }}>Top rated Restaurant</button>
                </div>
            <div className="res-container">
               {/* // Always use Keys (not acceptable) <<<<<< index as key <<<<<< unique key (Best practices)  */}
            {
                listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />))
            }
            </div>
        </div> 
    )
};

export default Body;