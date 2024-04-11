import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {

    const {resId} = useParams();
    // console.log(resId);

    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    const dummy = "Dummy Data";



// Move the ternary operator
if (resInfo === null) return <Shimmer />


const {name,cuisines,costForTwoMessage,sla} = resInfo?.cards?.[2]?.card?.card?.info || {};



const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
// console.log(itemCards);
// console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = 
resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  c=> c.card?.card?.["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

// const {cards} = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR;
// console.log(cards);


  return  (
    <div className = 'text-center'>
        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <p className="font-semibold text-lg">{cuisines.join(', ')}-{costForTwoMessage}</p>
        {/* cateogories of accordian (drop down menu) */}
        {categories.map((category, index) =>(<RestaurantCategory 
        key={category?.card?.card?.title} 
        data ={category?.card?.card}
        // Controlled component where Menu controls the category component.
        showItems = {index === showIndex ? true:false}
        setShowIndex = {() => setShowIndex(index)}
        dummy = {dummy}
        />
        ))}
        

    </div>
  );
};

export default RestaurantMenu; 