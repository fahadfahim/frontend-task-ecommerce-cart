import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import productsReducer from './products/productsSlice';
import wishlistReducer from './wishlist/wishListSlice'
import cartReducer from './cart/cartSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { saveState } from '../utils/localStorageUtils';

const persistConfig = {
    key: 'cart',
    storage,
};

const persistedProductReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
    reducer: {
        products: persistedProductReducer,
        cart: cartReducer,
        wishlist: wishlistReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

store.subscribe(() => {
    saveState('cartState', store.getState().cart);
    saveState('wishlistState', store.getState().wishlist);
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { };