import configSlice from './slice';
export const configSliceReducer = configSlice.reducer;
export const { setAppLoader } = configSlice.actions;
export const { setSwitchLoader } = configSlice.actions;
export const selectLoader = (state) => state.config.appLoader;
export const selectSwitchLoader = (state) => state.config.switchLoader;