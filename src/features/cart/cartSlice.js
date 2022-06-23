import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        existItem.qty += 1;
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    increment: (state, action) => {
      const product = state.cartItems.find((x) => x.id === action.payload);
      if (product) {
        product.qty += 1;
      }
    },
    decrement: (state, action) => {
      const product = state.cartItems.find((x) => x.id === action.payload);
      if (product) {
        if (product.qty <= 1) {
          product.qty = 1;
        } else {
          product.qty -= 1;
        }
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
    },
    success:(state)=>{
        state.cartItems = []
    }
  },
});

// Action Creator
export const { addItem, increment, decrement, removeItem,success } = cartSlice.actions;

export default cartSlice.reducer;
