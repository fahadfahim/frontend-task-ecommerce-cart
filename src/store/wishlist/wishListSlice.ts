import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../products/productsSlice';
import { loadState } from '../../utils/localStorageUtils';
import { toast } from 'react-toastify';

interface WishlistState {
    items: Product[];
}

const initialState: WishlistState = loadState<WishlistState>('wishlistState') || {
    items: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlist: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
                toast.info('Product remove from wishlist..!');

            } else {
                state.items.push(action.payload);
                toast.info('Product added to wishlist..!');

            }
        }
    },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
