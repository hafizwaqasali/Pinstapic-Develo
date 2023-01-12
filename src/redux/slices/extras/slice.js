import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isLookAdded: false,
    isYayorNayAdded: false
};

const extrasSlice = createSlice({
    name: 'extras',
    initialState,
    reducers: {
        setIsLookAdded: (state, action) => {
            state.isLookAdded = action.payload;
        },
        setIsYayorNayAdded: (state, action) => {
            state.isYayorNayAdded = action.payload;
        },
    },
});

export default extrasSlice;