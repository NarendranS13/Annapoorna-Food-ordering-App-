import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";



const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    // console.log(resId);

    useEffect(() => {
            fetchMenu()
    },[]);

const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    // console.log(json);
    // console.log(json.data.cards[0].card.card.info.name);
    setResInfo(json.data);
};

// Move the ternary operator
if (resInfo === null) return <Shimmer />


const {name,cuisines,costForTwoMessage,sla} = resInfo?.cards?.[0]?.card?.card?.info || {};

const {itemCards} = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
// console.log(itemCards);

// const {cards} = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR;
// console.log(cards);


  return  (
    <div className = 'menu'>
        <h1>{name}</h1>
        <p>{cuisines.join(', ')}-{costForTwoMessage}</p>
        <p>{sla.minDeliveryTime}-{sla.maxDeliveryTime} minutes</p>
        <ul>
            {itemCards.map((item)=> (
            <li key={item.card.info.id}>
                {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
            ))}
        </ul>


    </div>
  );
};

export default RestaurantMenu; 