import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appLoader: false,
  switchLoader: false,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setAppLoader: (state, action) => {
      state.appLoader = action.payload
    },
    setSwitchLoader: (state, action) => {
      state.switchLoader = action.payload
    },
  },
});

export default configSlice;