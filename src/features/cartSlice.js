import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },

    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity || 1;
            } else {
                state.items.push({ ...item, quantity: item.quantity || 1 });
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        },
        updateItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(i => i.id === id);
            if (existingItem) {
                existingItem.quantity = quantity > 0 ? quantity : 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
