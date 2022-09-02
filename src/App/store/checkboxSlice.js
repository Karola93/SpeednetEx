import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    isChecked: false,
    id: 0
};

export const checkboxSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {
        handleCheck(state) {
            state.isChecked = true;
        },
        handleUnCheck(state) {
            state.isChecked = false;
        },
        handleCheckboxId(state, action)  {
            state.id = action.payload;

        }
    }
});

export const {handleCheck, handleUnCheck, handleCheckboxId} = checkboxSlice.actions;

export const selectCheckboxId = (state) => state.checkbox.id;
export const selectCheckboxChecked = (state) => state.checkbox.isChecked;

export default checkboxSlice.reducer;