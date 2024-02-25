import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

// App layout
// -- Header
//          -- Logo Component
//          -- Nav items.
// -- Body
            // -- Search Component
            // -- Restaurant Container
                    // -- Image
                    // -- Res name, cuisine, rating, eta?
// -- Footer


const Header =() => {
    return (
        <div className="header">
            <div className ="logo-container">
                <img 
                className="logo"
                src="https://assets.materialup.com/uploads/08467c74-4744-4eac-817f-598b2f2fd680/preview.png"/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

// Inline styles - Not prefered.
// const styleCard = {
//     background: "#f0f0f0",
// };
// <div className = "res-card" style = {styleCard}>
//<div className = "res-card" style = {{
    // backgroundColor: "#f0f0f0"
// }}>
const RestaurantCard = (props) => {
    console.log(props)
    const {resName, cuisine,rating,eta} = props;
    return (
        <div className = "res-card" style = {{
            backgroundColor: '#f0f0f0'
        }}>
            <img className="res-logo"
            src = 'https://b.zmtcdn.com/data/pictures/0/20033630/47686f1feac71ee1e28cdea5aeebcb7f.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*' alt='Chinese Wok' />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{eta}</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                    resName = "Chinese Wok" 
                    cuisine = "Chinese, Noodles, Momos"
                    rating = "4.3 stars"
                    eta = "38 minutes"
                />
                <RestaurantCard 
                resName = "Pizza Hut" 
                cuisine = "Pizza, Garlic Bread, Cheeza"
                rating = "4.5 stars"
                eta = "25 minutes"
                 />

            </div>
        </div> 
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);