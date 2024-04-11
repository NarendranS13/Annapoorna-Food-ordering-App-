import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'

const appStore = configureStore({
    // Reducer is responsible for modifying the appstore store. 
    // We will reducer specifically produced for the slices
    reducer: {
        cart: cartReducer,
    },
});


export default appStore;