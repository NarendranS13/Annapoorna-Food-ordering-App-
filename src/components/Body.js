import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               {/* // Always use Keys (not acceptable) <<<<<< index as key <<<<<< unique key (Best practices)  */}
            {
                resList.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />))
            }
            </div>
        </div> 
    )
};

export default Body;