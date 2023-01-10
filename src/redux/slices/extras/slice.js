import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isLookAdded: false,
};

const extrasSlice = createSlice({
    name: 'extras',
    initialState,
    reducers: {
        setIsLookAdded: (state, action) => {
            state.isLookAdded = action.payload;
        },
    },
});

export default extrasSlice;