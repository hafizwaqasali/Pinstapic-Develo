import extrasSlice from './slice';
export const extrasSliceReducer = extrasSlice.reducer;
export const { setIsLookAdded, } = extrasSlice.actions;
export const selectIsLookAdded = (state) => state.extras.isLookAdded;