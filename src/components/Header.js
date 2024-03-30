import { LOGO_URL } from "../utils/constants";
import {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
const Header =() => {

    // let btnName = "Login";
    // console.log("Header Render");
    const [btnNameReact, setBtnNameReact] = useState("Login");
    // If no dependency array => useEffect is called on every Render
    // Empty array => useEffect is called on initial render(first Load itself)
    // If dependency array is btnNameReact => called everytime when btnNameReact updated.
    useEffect(()=>{},[btnNameReact]);
    return (
        <div className="header">
            <div className ="logo-container">
                <Link to = '/'>
                <img 
                className="logo" 
                src={LOGO_URL}/>
                </Link>
            </div>
            <div className = "nav-items">
                <div className="btn-group" role="group" aria-label="nav-bar">
                <button type="button" className="btn btn-link"><Link to='/'>Home</Link></button>
                <button type="button" className="btn btn-link"><Link to='/about'>About Us</Link></button>
                <button type="button" className="btn btn-link"><Link to='/Contact'>Contact Us</Link></button>
                <button type="button" className="btn btn-link">Cart</button>
                <button type="button" className="btn btn-primary" 
                    onClick={()=>{
                        btnNameReact === 'Login' ? setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }
                    }>{btnNameReact}
                    </button>
                </div>
                {/* <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>
                        <Link to='/about'>About Us</Link></li>
                    <li><Link to='/Contact'>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={()=>{
                        btnNameReact === 'Login' ? setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }
                    }>{btnNameReact}
                    </button>
                </ul> */}
            </div>
        </div>
    )
};

export default Header;