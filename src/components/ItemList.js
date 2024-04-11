import {useDispatch} from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";



const ItemList = ({items,dummy}) => {
    const menulist = items;

    const dispatch = useDispatch();
    // Users add items to the cart using Redux
    const handleAddItem = (item) => {
        // Dispatch an Action
        dispatch(addItem(item));
    }
    return (
        <div>
            {menulist.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-green-400 border-b-2 text-left flex">
                    {/* Left column for text */}
                    <div className="w-9/12 pr-4">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        </div>
                        <p>{item.card.info.description}</p>
                    </div>
                    {/* Right column for image */}
                    <div className="w-3/12 p-4 relative">
                    <div className="absolute top-0 left-0 attribute">
                        <button className="p-2 mx-5 rounded-lg bg-green-600 shadow-lg font-bold" 
                        // Callback Function
                        onClick={()=> handleAddItem(item)}>
                            Add +</button>
                    </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-2xl" alt={item.card.info.name} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList