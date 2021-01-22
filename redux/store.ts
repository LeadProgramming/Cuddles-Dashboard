import { configureStore } from '@reduxjs/toolkit';

import listingsReducer from './listings/listingsSlice';
const store = configureStore({
    reducer: {
        listings: listingsReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
