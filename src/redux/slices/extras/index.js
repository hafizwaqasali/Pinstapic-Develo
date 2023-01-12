import extrasSlice from './slice';
export const extrasSliceReducer = extrasSlice.reducer;
export const { setIsLookAdded, setIsYayorNayAdded } = extrasSlice.actions;
export const selectIsLookAdded = (state) => state.extras.isLookAdded;
export const selectIsYayorNayAdded = (state) => state.extras.isYayorNayAdded;