import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutation the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.filter(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
