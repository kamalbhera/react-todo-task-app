import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: Date.now()
}

export const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        setDate: (state, action) => {
            state.value = action.payload.date;
        }
    }
})

export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;