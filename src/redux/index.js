import { configureStore } from '@reduxjs/toolkit';
import { configSliceReducer } from './slices/config';
import { userSliceReducer } from './slices/user';
import { extrasSliceReducer } from './slices/extras';


export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        config: configSliceReducer,
        extras: extrasSliceReducer,
    },
});