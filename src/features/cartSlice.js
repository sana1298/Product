import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name:'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
  },
});

export const { addToCart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;