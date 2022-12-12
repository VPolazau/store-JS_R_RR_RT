import { configureStore } from '@reduxjs/toolkit';

import storeDataReducer from './reducers/storeDataSlice';

export const store = configureStore({
    reducer: {
        storeData: storeDataReducer,
    },
})
