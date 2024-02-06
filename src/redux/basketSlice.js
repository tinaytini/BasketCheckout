import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addProduct(state, action) {
            const existingItem = state.find(item => item.name === action.payload.name)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.push({ ...action.payload, quantity: 1 })
            }
            console.log(state)
        },
        removeProduct(state, action) {
            const updatedState = state.map(item => {
                if (item.name === action.payload.name) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return null;
                    }
                }
                return item;
            });
            console.log(updatedState)

            const newState = updatedState.filter(item => item !== null);

            return newState;
        },

        removeAllItem(state, action) {
            return state.filter(item => item.sku !== action.payload.sku)
        }
    }
})

export const { addProduct, removeProduct, removeAllItem } = basketSlice.actions;

export default basketSlice.reducer;
