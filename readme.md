This is a Food Ordering App created using React. 
Development started on Feb 25 2024.

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


# React Hooks
(Normal JS Utility Functions)
 - useState()
 - useEffect()
 (80% vs 20% usage)

# useState() -- Superpowerful State variables in react. 



# Routing in Web Apps.
1. Client Side routing.
2. Server Side Routing.

Server side routing -- It will do network call and bring that required page (old way). Will take some time and reload.

Client Side routing - All the components are already loaded. Routing will just change the component. Check the Network tab in Edge, chrome. Here the React app only do the Api call.


# Redux Tool Kit (RTK)
        - Install Redux Library (@redux/toolkit and react-redux). npm i @reduxjs/toolkit
        and npm i react-redux.
        - Build our Redux Store.
        - Connect our store to our App.
        - Slice (cartSlice)
        - Dispatch Action
        - Reducer Function
        - Read the data using Selector

# Types of Testig (Developer)
 - Unit Testing. -- Testing an Component in isolation.
 - Integration Testing. -- Checking the integration of Mulitple Components.
 - End to End Testing. (e2e testing). -- Testing where an User enters the Applications and exiting. Eg. Selenium. 

# Setting up the Testing in our App.
- Install React Testing Library 
- Intsalled JEST
- Installed dependencies required for JEST + Babel.
- Configure the Babel.
- Configure Parcel Config file under .parcelrc to disable the default babel Transpilation.
- Jest Configuration. - npx jest --init
- Install JSDOM library.(npm install --save-dev jest-environment-jsdom)
- Install @babel/preset-react - to make JSX work in test cases.
- Include @babel/preset-react inside my Babel config file
- Install @testing-library/jest-dom