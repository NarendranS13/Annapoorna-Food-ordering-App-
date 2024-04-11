import { LOGO_URL } from "../utils/constants";
import React,{useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
const Header =() => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // Subsriber to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    
    useEffect(()=>{},[btnNameReact]);
    return (
        <div className="flex justify-between bg-gray-100 shadow-lg">
            <div className ="logo-container">
                <Link to = '/'>
                <img 
                className="w-56" 
                src={LOGO_URL} alt="company logo"/>
                </Link>
            </div>
            <div className = "flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? "✅":"⚠️"}</li>
                    <li className="px-4 "><Link to='/' className="text-black no-underline">Home</Link></li>
                    <li className="px-4"><Link to='/about' className="text-black no-underline">About Us</Link></li>
                    <li className="px-4"><Link to='/Contact' className="text-black no-underline">Contact Us</Link></li>
                    <li className="px-4"><Link to='/Grocery' className="text-black no-underline">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to='/cart' className="text-black no-underline">Cart ({cartItems.length} items)</Link></li>
                    <button className="login w-20 bg-blue-400 rounded-lg hover:bg-blue-800 " 
                    onClick={()=>{
                        btnNameReact === 'Login' ? setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }
                    }>{btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;