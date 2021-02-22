import { configureStore } from '@reduxjs/toolkit';

import listingsReducer from './listings/listingsSlice';
import ordersReducer from './orders/ordersSlice';
const store = configureStore({
    reducer: {
        listings: listingsReducer,
        orders: ordersReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
