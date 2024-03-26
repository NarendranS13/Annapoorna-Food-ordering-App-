import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from 'react';
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    
    // State Variable - Super Powerful Variable
    const [listOfRestaurants,setListOfRestraunt] =useState([]);
    // Similar to an 
    // let listOfRestaurants;
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    
    // UseEffect
    useEffect(()=> {
        fetchData();
    }, []);

const fetchData = async () => {
    const data = await fetch(' https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9185161&lng=80.0929505&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();

    // console.log(json);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // To access the List of Restaurants card.
    setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

// Conditionanl Rendering. (Rendering based on Conditions)
// if (listOfRestaurants.length === 0) {
//     return <Shimmer />
// };

// We can club the condition and return in same statement using Ternary Operator

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className='search'>
                    <input type="text" className = 'search-box' value={searchText} onChange={(e)=> {setSearchText(e.target.value);
                    console.log(searchText)}}/>
                        <button onClick={ ()=> {
                            // Filter the restaurant cards and update the UI.
                            // SearchText
                            const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRestaurant);
                        
                        }}>
                            
                            Search
                            </button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    // Using useState
                    const filteredList = listOfRestaurants.filter(res=> res.info.avgRating>4.1);
                    // setListOfRestraunt(filteredList);
                    setFilteredRestaurant(filteredList);
                    // End of useState
                    // Filter logic to get Hotel rating >4.1
                    // listOfRestaurants = listOfRestaurants.filter(res=> res.data.avgRating>4.1)
                    // console.log(listOfRestaurants)

                    }}>Top rated Restaurant</button>
                </div>
            <div className="res-container">
               {/* // Always use Keys (not acceptable) <<<<<< index as key <<<<<< unique key (Best practices)  */}
            {
                filteredRestaurant.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>))
            }
            </div>
        </div> 
    )
};

export default Body;