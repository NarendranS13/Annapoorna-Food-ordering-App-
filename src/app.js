import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import FooterComponent from './components/Footer.js';
import RestaurantMenu from './components/RestaurantMenu.js';


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
            {/* if my path = /about then <About /> or if my path is contact = /contact  then <Contact />*/}
            <Outlet />
            <FooterComponent />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
// Way to give Routing (Multi pages)
root.render(<RouterProvider router={appRouter} />);