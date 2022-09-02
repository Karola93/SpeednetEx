import {configureStore} from "@reduxjs/toolkit";
import checkboxReducer from './checkboxSlice';

const store = configureStore({
    reducer: {checkbox: checkboxReducer}
});

export const AppDispatch = typeof store.dispatch;
export default store;