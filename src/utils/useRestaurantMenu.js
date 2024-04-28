import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    // fetch Data for this custom hook
    useEffect(() => {
        fetchMenu()
},[]);

// const fetchMenu = async () => {
//     const data = await fetch(MENU_API + resId);
//     const json = await data.json();
//     setResInfo(json.data);
// };

const fetchMenu = async () => {
    try {
        const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const data = await fetch(corsProxyUrl + MENU_API + resId, {
            headers: {
                'Origin': window.location.origin // Set the origin header to the current origin
            }
        });
        const json = await data.json();
        setResInfo(json.data);
    } catch (error) {
        console.error('Error fetching menu data:', error);
    }
};

    
    return resInfo;
};


export default useRestaurantMenu;