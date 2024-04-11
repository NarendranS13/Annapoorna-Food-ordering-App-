import RestaurantCard from "./RestaurantCard";
import { withPromotedLabel } from "./RestaurantCard";
import {useState, useEffect,useContext} from 'react';
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";


const Body = () => {
    
    // State Variable - Super Powerful Variable
    const [listOfRestaurants,setListOfRestraunt] =useState([]);
    // Similar to an 
    // let listOfRestaurants;
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // UseEffect
    useEffect(()=> {
        fetchData();
    }, []);

const fetchData = async () => {


    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9185161&lng=80.0929505&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


};





// Conditionanl Rendering. (Rendering based on Conditions)
// if (listOfRestaurants.length === 0) {
//     return <Shimmer />
// };

// We can club the condition and return in same statement using Ternary Operator

const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return <h1>Looks like you're Offline. Please check Internet Connection.</h1>

const {loggedInUser,setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className='search m-4 p-4'>
                    <input type="text" className = 'border border-solid border-black' value={searchText} onChange={(e)=> {setSearchText(e.target.value);
                    console.log(searchText)}}/>
                        <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={ ()=> {
                            // Filter the restaurant cards and update the UI.
                            // SearchText
                            const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRestaurant);
                        
                        }}>
                            
                            Search
                            </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-green-200 rounded-lg" onClick={()=>{
                    // Using useState
                    const filteredList = listOfRestaurants.filter(res=> res.info.avgRating>4.1);
                    // setListOfRestraunt(filteredList);
                    setFilteredRestaurant(filteredList);

                    }}>Top rated Restaurant</button>

                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input className="border border-black p-2" 
                    value = {loggedInUser}
                    onChange = {(e) => setUserName(e.target.value)}
                    />

                </div>

                </div>
            <div className="res-container flex flex-wrap">
               {/* // Always use Keys (not acceptable) <<<<<< index as key <<<<<< unique key (Best practices)  */}
            {
                filteredRestaurant.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id} className="no-underline"> 

                    {/* If the restaurant is in Mudichur Road add an Mudichur Road label. */}
                    
                    {restaurant.info.locality && restaurant.info.locality.toLowerCase() === "mudichur road" ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard  resData={restaurant} />}
                    
                    
                    {/* <RestaurantCard  resData={restaurant} /> */}
    
                    </Link>))
            }
            </div>
        </div> 
    )
};

export default Body;