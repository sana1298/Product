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
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.find(item => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.find(item => item.id === itemId);
      if (item) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart,removeFromCart,incrementQuantity,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;