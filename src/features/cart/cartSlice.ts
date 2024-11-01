import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../products/productsSlice';
import { loadState } from '../../utils/localStorageUtils';

interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}


const initialState: CartState = loadState('cartState') || {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('initialState', initialState);
      console.log('action', action.payload);

      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      console.log(initialState);

      console.log("Cart items after adding:", state.items);
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove the item completely if quantity is 1
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
    },

  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
