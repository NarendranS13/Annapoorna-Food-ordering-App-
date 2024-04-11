import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
       // Action: Reducer function(state, action)
        addItem: (state, action) => {
            // Mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items.pop();
        },
        clearCart: (state,action) => {
            state.items.length = 0; // This will make empty array. 
            // state.items = []
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;