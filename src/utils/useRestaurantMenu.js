import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    // fetch Data for this custom hook
    useEffect(() => {
        fetchMenu()
},[]);

const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId,{mode:'no-cors'});
    const json = await data.json();
    setResInfo(json.data);
};

    
    return resInfo;
};


export default useRestaurantMenu;