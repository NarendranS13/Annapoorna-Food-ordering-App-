import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from "./components/Header.js";
import Body from "./components/Body.js"





// Inline styles - Not prefered.
// const styleCard = {
//     background: "#f0f0f0",
// };
// <div className = "res-card" style = {styleCard}>
//<div className = "res-card" style = {{
    // backgroundColor: "#f0f0f0"
// }}>










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