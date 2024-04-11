import React, { Component, lazy,Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import FooterComponent from './components/Footer.js';
import Shimmer from './components/shimmer.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import UserContext from './utils/UserContext.js';
import {Provider} from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';
// import Grocery from './components/Grocery.js';




// Lazy is used to do Data chunking/ Lazy loading/On demand Load
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {

    // Authentication
     const [userName, setUserName] = useState();
     useEffect(()=>{
        // Make an API Call and send UserName and Password
        const data = {
            name: "Narendran"
        }
        setUserName(data.name);
     },[])

    return (
        <Provider store = {appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header />
            {/* if my path = /about then <About /> or if my path is contact = /contact  then <Contact />*/}
            <Outlet />
            <FooterComponent />
        </div>
        </UserContext.Provider>
        </Provider>
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
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
// Way to give Routing (Multi pages)
root.render(<RouterProvider router={appRouter} />);