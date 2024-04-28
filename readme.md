This is a Food Ordering App created using React. 
![image](https://github.com/NarendranS13/Annapoorna-Food-ordering-App-/assets/108397072/98b27103-26f0-4ccd-b995-62c122315108)

# Live App
https://annapoorna-food-app.netlify.app/

Note: Use CORS Plugin to view the app as it was using Live UPI.
https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf

# React Hooks
(Normal JS Utility Functions)
 - useState()
 - useEffect()
 (80% vs 20% usage)

# Custom Hooks Creation
Deployment of Custom Hooks for segregation of Hooks functionality from the JS files. 
Easy to debug and maintain code.



# Routing in Web Apps.
1. Client Side routing.
2. Server Side Routing.

Server side routing -- It will do network call and bring that required page (old way). Will take some time and reload.

Client Side routing - All the components are already loaded. Routing will just change the component. Check the Network tab in Edge, chrome. Here the React app only do the Api call.

# Tailwind CSS
Styling is done via Tailwind CSS.

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
